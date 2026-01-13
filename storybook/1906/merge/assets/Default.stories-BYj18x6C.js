import{j as e,r as f}from"./iframe-Cwcli8hM.js";import{I as l}from"./ImageCropper-C11L2Tvo.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{S as F}from"./Section-DEX4-fyD.js";import{F as C}from"./FileField-D_oXttv5.js";import{B as S}from"./Button-I78ZffkB.js";import{u as j,F as x,t as w}from"./Form-BjeSNwhI.js";import{S as v}from"./ResetButton-ByzjRyrZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Slider-DM6RSDbJ.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./index-CcWFAiT6.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./utils-C3qjWKVL.js";import"./useFieldComponent-DIqLhVln.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./context-ChPy2xgW.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./filterDOMProps-i7L6S0l1.js";import"./ProgressBar-DHOJVCPT.js";import"./useLabel-23O2EZ34.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ClHEyKKa.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocus-CSHYTGFD.js";import"./usePress-CMhi8zJA.js";import"./useFormReset-BDGa5C7A.js";import"./useFocusable-CLuaS2Z4.js";import"./VisuallyHidden-BpjAuZe7.js";import"./Label-CdIP0Akw.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BAImieHE.js";import"./Action-BmzkYOqA.js";import"./context-Cu13uzRC.js";import"./useStatic-DFI4OZ-s.js";import"./browser-Dim89v3O.js";import"./getActionGroupSlot-DirYDTjy.js";import"./dynamic-kiJ_5GPX.js";import"./Dialog-q_50MZOU.js";import"./Button-CxQOY8r5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./Text-C18q6Xnm.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./useFormValidation-BcDhKfF3.js";import"./FieldError-CJJNrBrn.js";import"./Input-BrN80aSI.js";import"./Text-D-waKGHU.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./LoadingSpinner-KOoU2K2x.js";import"./FieldError-C_uRtYKD.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DCEFieT1.js";const _e={title:"Upload/ImageCropper",component:l,render:n=>e.jsx(l,{...n,image:I.imageSrc})},m={},p={args:{aspect:16/9}},i={args:{width:400,height:200}},s={args:{aspect:1,cropShape:"round"}},c={render:n=>{const[o,g]=f.useState(),[r,u]=f.useState(null),h=()=>{if(!o)return;const t=URL.createObjectURL(o),a=document.createElement("a");a.href=t,a.download=o.name,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)};return e.jsxs(F,{children:[e.jsx(C,{accept:"image/png, image/jpeg, image/svg",onChange:u,children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})}),r&&e.jsx(l,{...n,image:r?.[0],onCropComplete:t=>g(t)}),o&&e.jsx(S,{onPress:h,children:"Download"})]})}},d={render:n=>{const[o,g]=f.useState(),r=j(),u=w(),h=r.watch("file")?.[0];return e.jsx(x,{form:r,onSubmit:()=>console.log(o?.name??""),children:e.jsxs(F,{children:[e.jsx(u,{name:"file",children:e.jsx(C,{accept:"image/png, image/jpeg, image/svg",children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})})}),h&&e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,image:r.watch("file")?.[0],onCropComplete:t=>g(t)}),e.jsx(v,{children:"Save"})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    aspect: 16 / 9
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 200
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    aspect: 1,
    cropShape: "round"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [croppedImage, setCroppedImage] = useState<File>();
    const [file, setFile] = useState<FileList | null>(null);
    const downloadCroppedImage = () => {
      if (!croppedImage) {
        return;
      }
      const url = URL.createObjectURL(croppedImage);
      const a = document.createElement("a");
      a.href = url;
      a.download = croppedImage.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
    return <Section>
        <FileField accept="image/png, image/jpeg, image/svg" onChange={setFile}>
          <Button variant="outline" color="secondary">
            Select an image
          </Button>
        </FileField>

        {file && <ImageCropper {...props} image={file?.[0]} onCropComplete={croppedImage => setCroppedImage(croppedImage)} />}

        {croppedImage && <Button onPress={downloadCroppedImage}>Download</Button>}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [croppedImage, setCroppedImage] = useState<File>();
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    const file = form.watch("file")?.[0];
    return <Form form={form} onSubmit={() => console.log(croppedImage?.name ?? "")}>
        <Section>
          <Field name="file">
            <FileField accept="image/png, image/jpeg, image/svg">
              <Button variant="outline" color="secondary">
                Select an image
              </Button>
            </FileField>
          </Field>
          {file && <>
              <ImageCropper {...props} image={form.watch("file")?.[0]} onCropComplete={croppedImage => setCroppedImage(croppedImage)} />
              <SubmitButton>Save</SubmitButton>
            </>}
        </Section>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Te=["Default","CustomAspect","CustomDimensions","RoundShape","WithDownload","WithForm"];export{p as CustomAspect,i as CustomDimensions,m as Default,s as RoundShape,c as WithDownload,d as WithForm,Te as __namedExportsOrder,_e as default};
