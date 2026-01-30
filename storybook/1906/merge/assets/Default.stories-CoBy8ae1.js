import{j as e,r as f}from"./iframe-B_TkxfTi.js";import{I as l}from"./ImageCropper-DWLWAHw0.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{S as F}from"./Section-DuAyIwjj.js";import{F as C}from"./FileField-cFYtsM-E.js";import{B as S}from"./Button-RJdr80c6.js";import{u as j,F as x,t as w,S as v}from"./ResetButton-Bdlat21c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Slider-CvpASKjD.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./index-B6XMVbfI.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./utils-CEh0pYpN.js";import"./useFieldComponent-C57DTYPz.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./context-Bqo0meff.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./filterDOMProps-BNnC3YgW.js";import"./ProgressBar-DY5wp8p-.js";import"./useLabel-D2pyCI0i.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CYdArkzJ.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocus-CWYeHEaO.js";import"./usePress-DqvJUCRP.js";import"./useFormReset-BlUfWbi8.js";import"./useFocusable-DUuU0sbS.js";import"./VisuallyHidden-BGokW8gm.js";import"./Label-B2z_KUki.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DayPbCkQ.js";import"./Action-BwMJcjOW.js";import"./context-D9DgwULu.js";import"./useStatic-cRv7_xgS.js";import"./browser-CLjLvoWS.js";import"./getActionGroupSlot-DtLKsNou.js";import"./dynamic-BusjqWiY.js";import"./Dialog-ChZYysky.js";import"./Button-n3CPGMPO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CP1vSDTy.js";import"./OverlayArrow-DmLbnMba.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./Text-CBbNcQAF.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./useFormValidation-CPzq_YrX.js";import"./FieldError-CJvsl-v5.js";import"./Input-BZn5pHU1.js";import"./Text-DZTN4U6B.js";import"./EmulatedBoldText-9YPP8018.js";import"./LoadingSpinner-CjHOYBjr.js";import"./FieldError-BTHn5en7.js";import"./AlertText-DZAkh8GI.js";import"./AlertIcon-DJdpqIO-.js";import"./useRef-D_3PHrag.js";import"./ButtonView-RI0SDeqV.js";const Pe={title:"Upload/ImageCropper",component:l,render:n=>e.jsx(l,{...n,image:I.imageSrc})},m={},p={args:{aspect:16/9}},i={args:{width:400,height:200}},s={args:{aspect:1,cropShape:"round"}},c={render:n=>{const[o,g]=f.useState(),[r,u]=f.useState(null),h=()=>{if(!o)return;const t=URL.createObjectURL(o),a=document.createElement("a");a.href=t,a.download=o.name,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)};return e.jsxs(F,{children:[e.jsx(C,{accept:"image/png, image/jpeg, image/svg",onChange:u,children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})}),r&&e.jsx(l,{...n,image:r?.[0],onCropComplete:t=>g(t)}),o&&e.jsx(S,{onPress:h,children:"Download"})]})}},d={render:n=>{const[o,g]=f.useState(),r=j(),u=w(),h=r.watch("file")?.[0];return e.jsx(x,{form:r,onSubmit:()=>console.log(o?.name??""),children:e.jsxs(F,{children:[e.jsx(u,{name:"file",children:e.jsx(C,{accept:"image/png, image/jpeg, image/svg",children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})})}),h&&e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,image:r.watch("file")?.[0],onCropComplete:t=>g(t)}),e.jsx(v,{children:"Save"})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const _e=["Default","CustomAspect","CustomDimensions","RoundShape","WithDownload","WithForm"];export{p as CustomAspect,i as CustomDimensions,m as Default,s as RoundShape,c as WithDownload,d as WithForm,_e as __namedExportsOrder,Pe as default};
