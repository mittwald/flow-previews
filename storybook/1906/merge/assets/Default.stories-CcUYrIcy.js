import{j as r,r as R}from"./iframe-BvdD6qXg.js";import{I as n}from"./ImageCropper-DVQ8sp-s.js";import{d as A}from"./dummyText-CX_I_Wpl.js";import{S as T}from"./Section-Bdu5CK1H.js";import{F as L}from"./FileField-b4aD3xvP.js";import{B as l}from"./Button-7ivsFGmn.js";import{u as U,F as W,t as K}from"./Form-0-PEKG-0.js";import"./clsx-B-dksMZM.js";import"./Slider-6_dldq3L.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./IconWarning-BNkxb_83.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./context-CM85t4Ux.js";import"./utils-DLyEFlgv.js";import"./Label-BA_GTzaI.js";import"./Hidden-DJ1F2YbP.js";import"./filterDOMProps-CghfNOdR.js";import"./ProgressBar-Bt3oFLCo.js";import"./useLabel-qrx4I7MD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-9GcYGGux.js";import"./useFocusRing-CImSweUq.js";import"./useFocus-ByAGBV0g.js";import"./usePress-2QIW6EnW.js";import"./useFormReset-yMYSmHMi.js";import"./useFocusable-0-dkSgyo.js";import"./VisuallyHidden-GD1ZdHbS.js";import"./ContextMenuSection-CAjXX6Mq.js";import"./Action-GPgeTEUr.js";import"./context-CUfZZ1vn.js";import"./useStatic-uGULccbV.js";import"./browser-D0kBFYzL.js";import"./getActionGroupSlot-D52RJivz.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BGFaL9Kl.js";import"./Button-DQnvmhgF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./RSPContexts-Myyfynwt.js";import"./OverlayArrow-DnRhWojv.js";import"./Collection-B3KJ39IP.js";import"./CollectionBuilder-CLZLxvdl.js";import"./Separator-BTA9WwIy.js";import"./Text-D84jcunx.js";import"./Group-CrFlWLH5.js";import"./SearchField-Cf5LxW_o.js";import"./FieldError-BhEhBaOS.js";import"./Form-BShbB3hD.js";import"./useTextField-8lhmPbxJ.js";import"./TextField-DFc82d9L.js";import"./useEvent-DU_k0cnD.js";import"./SelectionManager-CaW73nQO.js";import"./useCollator-DSve1vwE.js";import"./FocusScope-D2M4fWVA.js";import"./FormField.module-B9AzUSUD.js";import"./Text-CCdgZxrm.js";import"./EmulatedBoldText-DlBeGY0R.js";import"./LoadingSpinner-BmDETFjn.js";import"./FieldError-BU8vkL3I.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Upload/ImageCropper",component:n,render:p=>r.jsx(n,{...p,image:A.imageSrc})},e={},o={args:{aspect:16/9}},t={args:{width:400,height:200}},m={args:{aspect:1,cropShape:"round"}},i={render:p=>{var c,d;const[a,O]=R.useState(),s=U(),D=K(),b=(c=s.watch("file"))==null?void 0:c[0];return r.jsx(W,{form:s,onSubmit:()=>M((a==null?void 0:a.name)??""),children:r.jsxs(T,{children:[r.jsx(D,{name:"file",children:r.jsx(L,{accept:"image/png, image/jpeg, image/svg",children:r.jsx(l,{variant:"outline",color:"secondary",children:"Select an image"})})}),b&&r.jsxs(r.Fragment,{children:[r.jsx(n,{...p,image:(d=s.watch("file"))==null?void 0:d[0],onCropComplete:E=>O(E)}),r.jsx(l,{type:"submit",children:"Save"})]})]})})}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var F,S,h;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
