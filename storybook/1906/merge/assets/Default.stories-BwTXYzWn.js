import{j as e,r as f}from"./iframe-B9oS1eAm.js";import{I as l}from"./ImageCropper-DwvYq26w.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{S as F}from"./Section-BlZng62t.js";import{F as C}from"./FileField-raGYp1VB.js";import{B as S}from"./Button-DYAI_N0q.js";import{u as j,F as x,t as w,S as v}from"./ResetButton-4NarTcNc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Slider-BB1sC_KI.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./index-CYuWkd4j.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./utils-CkbQ6lDO.js";import"./useFieldComponent-BBgwgWHq.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./context-CSGUwiAp.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./filterDOMProps-BNnC3YgW.js";import"./ProgressBar-DmEGRNOl.js";import"./useLabel-CLQlKL9C.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BhPlyXsf.js";import"./useFocusRing-CD4YKl48.js";import"./useFocus-BUMqhqrN.js";import"./usePress-CvAqmGGe.js";import"./useFormReset-CfNbS0Tm.js";import"./useFocusable-DLbArD3q.js";import"./VisuallyHidden-D5FMvG_d.js";import"./Label-IJFVFDuP.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B77fxBO-.js";import"./Action-uBGtkJG1.js";import"./context-CJJiwCXZ.js";import"./useStatic-D0W9io-P.js";import"./browser-DuZ3LDHb.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./dynamic-D5cDPq7G.js";import"./Dialog-DQxs1UCg.js";import"./Button-BCaEF3RH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BiSXvS4y.js";import"./OverlayArrow-D190ErXx.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./Text-DSVxOKBO.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./useFormValidation-pe71fieX.js";import"./FieldError-Dfuql1HI.js";import"./Input-eUUGTdC3.js";import"./Text-D9DZPtYx.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./LoadingSpinner-BCe3g54S.js";import"./FieldError-BkKW3wP7.js";import"./AlertText-D9s0hTSb.js";import"./AlertIcon-CyL6LR1b.js";import"./useRef-D23fJLYr.js";import"./ButtonView-BFgeb-7u.js";const Pe={title:"Upload/ImageCropper",component:l,render:n=>e.jsx(l,{...n,image:I.imageSrc})},m={},p={args:{aspect:16/9}},i={args:{width:400,height:200}},s={args:{aspect:1,cropShape:"round"}},c={render:n=>{const[o,g]=f.useState(),[r,u]=f.useState(null),h=()=>{if(!o)return;const t=URL.createObjectURL(o),a=document.createElement("a");a.href=t,a.download=o.name,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)};return e.jsxs(F,{children:[e.jsx(C,{accept:"image/png, image/jpeg, image/svg",onChange:u,children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})}),r&&e.jsx(l,{...n,image:r?.[0],onCropComplete:t=>g(t)}),o&&e.jsx(S,{onPress:h,children:"Download"})]})}},d={render:n=>{const[o,g]=f.useState(),r=j(),u=w(),h=r.watch("file")?.[0];return e.jsx(x,{form:r,onSubmit:()=>console.log(o?.name??""),children:e.jsxs(F,{children:[e.jsx(u,{name:"file",children:e.jsx(C,{accept:"image/png, image/jpeg, image/svg",children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})})}),h&&e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,image:r.watch("file")?.[0],onCropComplete:t=>g(t)}),e.jsx(v,{children:"Save"})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
