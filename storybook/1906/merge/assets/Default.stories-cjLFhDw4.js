import{j as r,r as R}from"./iframe-D8FrJ-CZ.js";import{I as n}from"./ImageCropper-OpMSA5Cx.js";import{d as A}from"./dummyText-CX_I_Wpl.js";import{S as T}from"./Section-7XksVYFo.js";import{F as L}from"./FileField-Bk6MqUp6.js";import{B as l}from"./Button-Cq__NSNu.js";import{u as U,F as W,t as K}from"./Form-DWHZtf8w.js";import"./clsx-B-dksMZM.js";import"./Slider-gbjJj2eD.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./IconWarning-C11FXGxU.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./context-Dz2Qbbtu.js";import"./utils-DLru3qrQ.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./filterDOMProps-CghfNOdR.js";import"./ProgressBar-DaMaURS1.js";import"./useLabel-DAKRqT8J.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bhtz6D6k.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocus-_KFCgimG.js";import"./usePress-mcSHbC1W.js";import"./useFormReset-BMZp-ADn.js";import"./useFocusable-BXg3nN8-.js";import"./VisuallyHidden-HCxlUedB.js";import"./ContextMenuSection-Bx237WzR.js";import"./Action-_fiDaeQa.js";import"./context-DfaRjifq.js";import"./useStatic-3eGZwKWm.js";import"./browser-Df0WU9AE.js";import"./getActionGroupSlot-kdQR9GNf.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D2aL6iTu.js";import"./Button-DVdJDgqt.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./RSPContexts-DvajV3uw.js";import"./OverlayArrow-DjgfcPnj.js";import"./Collection-BWh0MO5P.js";import"./CollectionBuilder-D7rkl-fZ.js";import"./Separator-Dp29JyT-.js";import"./Text-CjVOmJR3.js";import"./Group-CHBQvVuc.js";import"./SearchField-BVNSbwCA.js";import"./FieldError-DUyd9_2U.js";import"./Form-DsyloFzD.js";import"./useTextField-mqiYsdTK.js";import"./TextField-DhjdGSid.js";import"./useEvent-TvzQ57Lp.js";import"./SelectionManager-BHHDa5mG.js";import"./useCollator-D1vKzkof.js";import"./FocusScope-BCf9GP_l.js";import"./FormField.module-B9AzUSUD.js";import"./Text-CijQgHlf.js";import"./EmulatedBoldText-CzquwV9M.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./FieldError-6eoAimLP.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Upload/ImageCropper",component:n,render:p=>r.jsx(n,{...p,image:A.imageSrc})},e={},o={args:{aspect:16/9}},t={args:{width:400,height:200}},m={args:{aspect:1,cropShape:"round"}},i={render:p=>{var c,d;const[a,O]=R.useState(),s=U(),D=K(),b=(c=s.watch("file"))==null?void 0:c[0];return r.jsx(W,{form:s,onSubmit:()=>M((a==null?void 0:a.name)??""),children:r.jsxs(T,{children:[r.jsx(D,{name:"file",children:r.jsx(L,{accept:"image/png, image/jpeg, image/svg",children:r.jsx(l,{variant:"outline",color:"secondary",children:"Select an image"})})}),b&&r.jsxs(r.Fragment,{children:[r.jsx(n,{...p,image:(d=s.watch("file"))==null?void 0:d[0],onCropComplete:E=>O(E)}),r.jsx(l,{type:"submit",children:"Save"})]})]})})}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var F,S,h;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    aspect: 16 / 9
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,C,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 200
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var I,_,y;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    aspect: 1,
    cropShape: "round"
  }
}`,...(y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var B,v,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    const [croppedImage, setCroppedImage] = useState<File>();
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    const file = form.watch("file")?.[0];
    return <Form form={form} onSubmit={() => action(croppedImage?.name ?? "")}>
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
              <Button type="submit">Save</Button>
            </>}
        </Section>
      </Form>;
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const Jr=["Default","CustomAspect","CustomDimensions","RoundShape","WithForm"];export{o as CustomAspect,t as CustomDimensions,e as Default,m as RoundShape,i as WithForm,Jr as __namedExportsOrder,Hr as default};
