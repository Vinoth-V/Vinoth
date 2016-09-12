import tarfile
import os,os.path, time, datetime

def tar_sample():
	tar = tarfile.open("sample.tar.gz", "w:gz")
	for name in ["vn_server_path.txt", "ms_crm_insert.py", "query_len.txt"]:
	    tar.add(name)
	tar.close()

def get_files(from_date,to_date,source_folder_path):
	result=os.listdir(source_folder_path)
	for each in result:
		if each.endswith('.log'):
			created_date=time.ctime(os.path.getctime(source_folder_path+'/'+each))
			print datetime.datetime.strptime(created_datex, '%Y-%m-%d')

get_files('','','test_logs')
