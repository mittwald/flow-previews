import{j as e,r as f}from"./iframe-DBKYLzDC.js";import{I as l}from"./ImageCropper-BZHS7VOX.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{S as F}from"./Section-D0mpF1xZ.js";import{F as C}from"./FileField-CV4-yn71.js";import{B as S}from"./Button-BFOZVdd1.js";import{u as j,F as x,t as w,S as v}from"./ResetButton-ssRCuNTw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Slider-BLN_1e81.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./index-Dr37f313.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./utils-BUG9eo0Q.js";import"./useFieldComponent-DRt8IUS_.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./ProgressBar-PjCJ3Rn2.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CAANpQPW.js";import"./useFocusRing-BksqeYWz.js";import"./useFocus-TYDADYlM.js";import"./usePress-BZ5qqTtf.js";import"./useFormReset-BczjDhHV.js";import"./useFocusable-C-cRLAom.js";import"./VisuallyHidden-BW797Lc5.js";import"./Label-Dsk_CpOI.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DLB9FUAU.js";import"./Action-CPy4r2qq.js";import"./context-Duo0MdiJ.js";import"./useStatic-DlOT-tNl.js";import"./browser-DhKn1UU2.js";import"./getActionGroupSlot-BnE40Egr.js";import"./dynamic-C4GhTGlQ.js";import"./Dialog-DCNro2wm.js";import"./Button-Cx-eUYHB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./Text-D7rD6BG6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./useFormValidation-DNSyvwAg.js";import"./FieldError-DtV1i0Hc.js";import"./Input-DeboNFfQ.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./LoadingSpinner-CHsn4uBv.js";import"./FieldError-BpFJPqyd.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";import"./useRef-CtdmBt-J.js";import"./ButtonView-CEeOUgiW.js";const Pe={title:"Upload/ImageCropper",component:l,render:n=>e.jsx(l,{...n,image:I.imageSrc})},m={},p={args:{aspect:16/9}},i={args:{width:400,height:200}},s={args:{aspect:1,cropShape:"round"}},c={render:n=>{const[o,g]=f.useState(),[r,u]=f.useState(null),h=()=>{if(!o)return;const t=URL.createObjectURL(o),a=document.createElement("a");a.href=t,a.download=o.name,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)};return e.jsxs(F,{children:[e.jsx(C,{accept:"image/png, image/jpeg, image/svg",onChange:u,children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})}),r&&e.jsx(l,{...n,image:r?.[0],onCropComplete:t=>g(t)}),o&&e.jsx(S,{onPress:h,children:"Download"})]})}},d={render:n=>{const[o,g]=f.useState(),r=j(),u=w(),h=r.watch("file")?.[0];return e.jsx(x,{form:r,onSubmit:()=>console.log(o?.name??""),children:e.jsxs(F,{children:[e.jsx(u,{name:"file",children:e.jsx(C,{accept:"image/png, image/jpeg, image/svg",children:e.jsx(S,{variant:"outline",color:"secondary",children:"Select an image"})})}),h&&e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,image:r.watch("file")?.[0],onCropComplete:t=>g(t)}),e.jsx(v,{children:"Save"})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
