import{j as e,r as f}from"./iframe-DzPnzOIh.js";import{I as l}from"./ImageCropper-rdBYhArf.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{S as F}from"./Section-DjVn5x2V.js";import{F as C}from"./FileField-CAE7ljWl.js";import{B as S}from"./Button-B0xxYjKh.js";import{u as j,F as x,t as w,S as v}from"./ResetButton-DLA2D0J0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Slider-CZcU9Q4Z.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./index-nNa6hI3H.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./utils-DdPADezN.js";import"./useFieldComponent-DttoHSbm.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./filterDOMProps-BNnC3YgW.js";import"./ProgressBar-BDc0eUXF.js";import"./useLabel-DAdMc5BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C5NVaprX.js";import"./useFocusRing-h77ik7V4.js";import"./useFocus-lCD3lNhC.js";import"./usePress-COgw0Owx.js";import"./useFormReset-D5TocNhH.js";import"./useFocusable-DMy60j_I.js";import"./VisuallyHidden-C2tKF7nl.js";import"./Label-Caopyz4i.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DfF2Gqpp.js";import"./Action-D4qqw_zO.js";import"./context-CvuQDK5p.js";import"./useStatic-B5sjyhg8.js";import"./browser-DO1on-Lg.js";import"./getActionGroupSlot-BseyWuGA.js";import"./dynamic-CR1FGrpS.js";import"./Dialog-BkygjXx5.js";import"./Button-CCOKLUK2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./Text-CKGruhzq.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./useFormValidation-DrH-jwNK.js";import"./FieldError-BLx5YP6h.js";import"./Input-CP7U2NGu.js";import"./Text-CgXXsRbz.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./LoadingSpinner-3EdJH7-V.js";import"./FieldError-CliUFFQL.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";import"./useRef-DTc68hRI.js";import"./ButtonView-DAqv122X.js";const Pe={title:"Upload/ImageCropper",component:l,render:n=>e.jsx(l,{...n,image:I.imageSrc})},m={},p={args:{aspect:16/9}},i={args:{width:400,height:200}},s={args:{aspect:1,cropShape:"round"}},c={render:n=>{const[o,g]=f.useState(),[r,u]=f.useState(null),h=()=>{if(!o)return;const t=URL.createObjectURL(o),a=document.createElement("a");a.href=t,a.download=o.name,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)};return e.jsxs(F,{children:[e.jsx(C,{accept:"image/png, image/jpeg, image/svg",onChange:u,children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})}),r&&e.jsx(l,{...n,image:r?.[0],onCropComplete:t=>g(t)}),o&&e.jsx(S,{onPress:h,children:"Download"})]})}},d={render:n=>{const[o,g]=f.useState(),r=j(),u=w(),h=r.watch("file")?.[0];return e.jsx(x,{form:r,onSubmit:()=>console.log(o?.name??""),children:e.jsxs(F,{children:[e.jsx(u,{name:"file",children:e.jsx(C,{accept:"image/png, image/jpeg, image/svg",children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})})}),h&&e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,image:r.watch("file")?.[0],onCropComplete:t=>g(t)}),e.jsx(v,{children:"Save"})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
