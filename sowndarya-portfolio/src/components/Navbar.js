// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto w-11/12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4 md:justify-start md:space-x-4">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="text-base font-medium text-zinc-900">
            Sowndarya K P
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Home
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            About
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Projects
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Blog
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Contact
          </a>
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <div className="flex gap-2">
            <a href="#" className="text-black-500 hover:text-black-600 transition duration-300 transform hover:-translate-y-1">
              <span className="sr-only">GitHub</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.164 6.839 9.492.5.094.682-.216.682-.481 0-.237-.009-.866-.013-1.7-2.782.604-3.37-1.34-3.37-1.34-.455-1.153-1.112-1.462-1.112-1.462-.907-.618.069-.604.069-.604 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.087 2.91.831.09-.644.35-1.086.637-1.336-2.228-.253-4.567-1.117-4.567-4.967 0-1.098.39-1.995 1.033-2.698-.104-.254-.448-1.277.098-2.656 0 0 .845-.271 2.77 1.03a9.612 9.612 0 0 1 2.484-.335c.842.006 1.694.113 2.484.335 1.923-1.301 2.767-1.03 2.767-1.03.548 1.379.204 2.402.1 2.656.644.703 1.033 1.6 1.033 2.698 0 3.859-2.342 4.711-4.576 4.959.36.309.681.923.681 1.862 0 1.346-.012 2.427-.012 2.759 0 .267.181.579.688.481C19.137 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="text-black-500 hover:text-black-600 transition duration-300 transform hover:-translate-y-1">
              <span className="sr-only">LinkedIn</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.806 2H2.194C1.033 2 0 3.033 0 4.194v15.612C0 20.967 1.033 22 2.194 22h19.612C22.967 22 24 20.967 24 19.806V4.194C24 3.033 22.967 2 21.806 2zM7.93 19.357H4.917V10.88h3.013v8.477zM6.424 9.687a2.287 2.287 0 11.001-4.574 2.287 2.287 0 010 4.575zM20.125 19.357h-3.014v-4.571c0-1.086-.022-2.485-1.513-2.485-1.514 0-1.748 1.182-1.748 2.403v4.653h-3.014V10.88h2.913v1.275h.039c.407-.77 1.4-1.586 2.878-1.586 3.076 0 3.645 2.025 3.645 4.656v5.132z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default Navbar;



















<template>
	<div>
	  <textarea v-model="editorData" id="editor"></textarea>

	  <input type="file" @change="loadTemplate">
    <button @click="saveTemplate">Save Template</button>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	data() {
	  return {
		editorData: ``
	  };
	},
	mounted() {
	  let tableRows = '';
	  let additionalLabels = {};
  
	  // Fetch additional labels data from the endpoint
	  axios.get('http://172.18.100.240:8888/additional-labels')
		.then(response => {
		  // Extract the additional labels data from the response
		  additionalLabels = response.data;
  
		  // Generate table rows with the fetched data from dimensions endpoint
		  axios.get('http://172.18.100.240:8888/dimensions')
			.then(response => {
			  // Extract the data from the response
			  const fetchedData = response.data;
  
			  // Generate table rows with the fetched data
			  fetchedData.forEach(item => {
				tableRows += `
				  <tr>
					<td>${item.ID}</td>
					<td>${item.Dimension}</td>
					<td>${item.Measured}</td>
					<td>${item.upper_tolerance}</td>
					<td>${item.lower_tolerance}</td>
					<td>${item.Dim_Type}</td>
				  </tr>`;
			  });
  
			  // Populate editorData with the fetched data
			  this.editorData = `
			  <h1><strong><span style="font-size:26px">&nbsp;REPORT&nbsp;&nbsp;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5yD4nZYCoGw5E5ssxxm9ipwyugL7ng849VBz9PjWmw&amp;s" style="height:71px; width:120px" /></strong></h1>
			  
				<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:1000px">
				  <tbody>
					<tr>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Date:</strong></span></td>
					  <td style="text-align:center"><span style="font-size:16px"><strong>${additionalLabels.Date}</strong></span></td>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Quantity:</strong></span></td>
					  <td style="text-align:center"><span style="font-size:16px">${additionalLabels.Quantity}</span></td>
					</tr>
					<tr>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Inspection Report No:</strong></span></td>
					  <td style="text-align:center"><span style="font-size:16px">${additionalLabels.Inspection_Report_No}</span></td>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Group:</strong></span></td>
					  <td style="text-align:center"><span style="font-size:16px">${additionalLabels.Group}</span></td>
					</tr>
					<tr>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Project Name:&nbsp;</strong></span></td>
					  <td style="text-align:center">${additionalLabels.Project_Name}</td>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Part Name:</strong></span></td>
					  <td style="text-align:center"><span style="font-size:16px">${additionalLabels.Part_Name}</span></td>
					</tr>
					<tr>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Project Number:</strong></span></td>
					  <td style="text-align:center">${additionalLabels.Project_Number}</td>
					  <td style="text-align:center"><span style="font-size:16px"><strong>Part Number:</strong></span></td>
					  <td style="text-align:center">${additionalLabels.Part_Number}</td>
					</tr>
				  </tbody>
				</table>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:1000px">
				  <tbody>
					<tr>
					  <td style="text-align:center">
						<p><span style="font-size:14px"><strong>ID&nbsp; &nbsp;</strong></span></p>
					  </td>
					  <td style="text-align:center"><span style="font-size:14px"><strong>&nbsp; &nbsp;Dimension&nbsp; &nbsp;</strong></span></td>
					  <td style="text-align:center"><span style="font-size:14px"><strong>&nbsp; &nbsp;Measured&nbsp; &nbsp;Value </strong></span></td>
					  <td style="text-align:center"><span style="font-size:14px"><strong>&nbsp; &nbsp; Upper_Tolerance</strong></span></td>
					  <td style="text-align:center"><span style="font-size:14px"><strong>&nbsp; &nbsp; &nbsp;Lower_Tolerance</strong></span></td>
					  <td style="text-align:center"><span style="font-size:14px"><strong>&nbsp; &nbsp; Dim_Type</strong></span></td>
					</tr>
					${tableRows}
				  </tbody>
				</table>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>`;
			})
			.catch(error => {
			  console.error('Error fetching data:', error);
			});
		})
		.catch(error => {
		  console.error('Error fetching additional labels data:', error);
		});
  
	  // Initialize CKEditor
	  CKEDITOR.replace('editor', {
		toolbar: [
		  { name: 'document', items: ['Source', '-', 'Save', 'Print'] },
		  { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
		  { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] },
		  { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
		  { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'uploadImage'] },
		  '/',
		  { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
		  { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'] },
		  { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },
		  { name: 'colors', items: ['TextColor', 'BGColor'] },
		  { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
		  { name: 'about', items: ['About'] }
		],
		language: 'en',
		removePlugins: 'about,about:blank',
		// Add any other configuration options here
		on: {
		  instanceReady: function(evt) {
			var editor = evt.editor;
  
			// Add custom command to save as PDF
			editor.addCommand('PdfSave', {
			  exec: function(editor) {
				var content = editor.getData();
				var printWindow = window.open('', '_blank');
				printWindow.document.open();
				printWindow.document.write('<html><head><title>PDF</title></head><body>' + content + '</body></html>');
				printWindow.document.close();
				printWindow.print();
			  }
			});
  
			// Bind the custom command to the 'Save' button
			editor.ui.addButton('PdfSaveButton', {
			  label: 'Save as PDF',
			  command: 'PdfSave',
			  toolbar: 'document'
			});
  
			// Add custom upload image button
			CKEDITOR.instances.editor.addCommand('uploadImage', {
			  exec: function(editor) {
				var input = document.createElement('input');
				input.type = 'file';
				input.accept = 'image/png';
				input.onchange = function(e) {
				  var file = e.target.files[0];
				  var reader = new FileReader();
				  reader.onload = function(event) {
					var imgSrc = event.target.result;
					var imgHtml = '<img src="' + imgSrc + '" />';
					editor.insertHtml(imgHtml);
				  }
				  reader.readAsDataURL(file);
				}
				input.click();
			  }
			});
			CKEDITOR.instances.editor.ui.addButton('Image', {
			  label: 'Insert Image',
			  command: 'uploadImage',
			  toolbar: 'insert'
			});
		  }
		}
	  });
	},
	methods: {
	  saveAsPDF() {
		var content = CKEDITOR.instances.editor.getData();
		var printWindow = window.open('', '_blank');
		printWindow.document.open();
		printWindow.document.write('<html><head><title>PDF</title></head><body>' + content + '</body></html>');
		printWindow.document.close();
		printWindow.print();
	  },
	  saveTemplate() {
  let editor = CKEDITOR.instances.editor;
  const content = editor.getData();
  const blob = new Blob([content], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'template.html';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}
,

loadTemplate(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    this.editorData = reader.result;
    CKEDITOR.instances.editor.setData(this.editorData);
  };
  reader.readAsText(file);
}

	},
	beforeDestroy() {
	  CKEDITOR.instances.editor.destroy();
	}
  };
  </script>
  