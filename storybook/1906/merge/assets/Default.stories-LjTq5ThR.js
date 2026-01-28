import{j as e,r as f}from"./iframe-CFLRrV9_.js";import{I as l}from"./ImageCropper-BRlLN4gl.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{S as F}from"./Section-DcEQD72A.js";import{F as C}from"./FileField-u0o1mVyY.js";import{B as S}from"./Button-C6DtPvCF.js";import{u as j,F as x,t as w,S as v}from"./ResetButton-DjqnxgyX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Slider-CiAzhdyW.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./index-24zjo-Kb.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./utils-9RAZgTTl.js";import"./useFieldComponent-CywuRKF5.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./context-bb3yZDI9.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./filterDOMProps-BNnC3YgW.js";import"./ProgressBar-CAwZsQPk.js";import"./useLabel-C42gu-3e.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BS0DqA_d.js";import"./useFocusRing-DRVonXEI.js";import"./useFocus-DD1T6bJ4.js";import"./usePress-LdOf-GEu.js";import"./useFormReset-BcY6_uyQ.js";import"./useFocusable-CQU1ZNCF.js";import"./VisuallyHidden-DH38u7VP.js";import"./Label-DDweLn-B.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-KLSTc6el.js";import"./Action--cE17EXA.js";import"./context-CslVSGqZ.js";import"./useStatic-Bo06Q_Yy.js";import"./browser-6ZyX-izP.js";import"./getActionGroupSlot-DBTwflYW.js";import"./dynamic-CfUvB6Rc.js";import"./Dialog-CsaxLO_h.js";import"./Button-CQ9x5Ymh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CrNZITQd.js";import"./OverlayArrow-67PBRhfH.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./Text-DCjLwlBM.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./useCollator-BuvCZz5o.js";import"./FocusScope-To3K9I_L.js";import"./useFormValidation-Cm_zD3mV.js";import"./FieldError-D073kW89.js";import"./Input-QBFM7ItQ.js";import"./Text-DEmvrg4f.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./LoadingSpinner-D6sn6dKn.js";import"./FieldError-BY_h0DzJ.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";import"./useRef-BHiB85kd.js";import"./ButtonView-C98-Wvmx.js";const Pe={title:"Upload/ImageCropper",component:l,render:n=>e.jsx(l,{...n,image:I.imageSrc})},m={},p={args:{aspect:16/9}},i={args:{width:400,height:200}},s={args:{aspect:1,cropShape:"round"}},c={render:n=>{const[o,g]=f.useState(),[r,u]=f.useState(null),h=()=>{if(!o)return;const t=URL.createObjectURL(o),a=document.createElement("a");a.href=t,a.download=o.name,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)};return e.jsxs(F,{children:[e.jsx(C,{accept:"image/png, image/jpeg, image/svg",onChange:u,children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})}),r&&e.jsx(l,{...n,image:r?.[0],onCropComplete:t=>g(t)}),o&&e.jsx(S,{onPress:h,children:"Download"})]})}},d={render:n=>{const[o,g]=f.useState(),r=j(),u=w(),h=r.watch("file")?.[0];return e.jsx(x,{form:r,onSubmit:()=>console.log(o?.name??""),children:e.jsxs(F,{children:[e.jsx(u,{name:"file",children:e.jsx(C,{accept:"image/png, image/jpeg, image/svg",children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})})}),h&&e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,image:r.watch("file")?.[0],onCropComplete:t=>g(t)}),e.jsx(v,{children:"Save"})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
