import{j as r,r as R}from"./iframe-CB_IvR8I.js";import{I as n}from"./ImageCropper-jLY5cEvy.js";import{d as A}from"./dummyText-CX_I_Wpl.js";import{S as T}from"./Section-ChgdckCA.js";import{F as L}from"./FileField-CuEjSdYq.js";import{B as l}from"./Button-B6pH5E7T.js";import{u as U,F as W,t as K}from"./Form-DpTUUNrZ.js";import"./clsx-B-dksMZM.js";import"./Slider-CA6Me8La.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./IconWarning-DHvxn9zQ.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./context-CQpLcUPr.js";import"./utils-g_K47B_Q.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./filterDOMProps-CghfNOdR.js";import"./ProgressBar-DB_rXcaP.js";import"./useLabel-DNzpHOuu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CS3WyH2d.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocus-B0PqsM1A.js";import"./usePress-BSSkfFZ6.js";import"./useFormReset-DVL0Bkgs.js";import"./useFocusable-B2StGM5o.js";import"./VisuallyHidden-D4WM3JvY.js";import"./ContextMenuSection-CCIV1sJL.js";import"./Action-DXrBr-ZU.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";import"./browser-CyPw7Cgt.js";import"./getActionGroupSlot-Bj-rdEEm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-nVDPewl7.js";import"./Button-BNZImaSB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./RSPContexts-PWzkBgmU.js";import"./OverlayArrow-01R9fjkr.js";import"./Collection-BYXnLO4u.js";import"./CollectionBuilder-opZAg4uy.js";import"./Separator-Bv7qspKp.js";import"./Text-B8w1c0_W.js";import"./Group-BtoN_DlS.js";import"./SearchField-CR8AG0pb.js";import"./FieldError-7I8SRRkd.js";import"./Form-BSDtEK6z.js";import"./useTextField-Dvn-D0Cy.js";import"./TextField-nXjEyJdg.js";import"./useEvent--a1AA2TN.js";import"./SelectionManager-DyWAPqsT.js";import"./useCollator-3DG3Mrdl.js";import"./FocusScope-2f5e0YPn.js";import"./FormField.module-CqWyJNQI.js";import"./Text-C_h1oOw9.js";import"./EmulatedBoldText-B-vVao8K.js";import"./LoadingSpinner-B018WmYG.js";import"./FieldError-COPLGoQY.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Upload/ImageCropper",component:n,render:p=>r.jsx(n,{...p,image:A.imageSrc})},e={},o={args:{aspect:16/9}},t={args:{width:400,height:200}},m={args:{aspect:1,cropShape:"round"}},i={render:p=>{var c,d;const[a,O]=R.useState(),s=U(),D=K(),b=(c=s.watch("file"))==null?void 0:c[0];return r.jsx(W,{form:s,onSubmit:()=>M((a==null?void 0:a.name)??""),children:r.jsxs(T,{children:[r.jsx(D,{name:"file",children:r.jsx(L,{accept:"image/png, image/jpeg, image/svg",children:r.jsx(l,{variant:"outline",color:"secondary",children:"Select an image"})})}),b&&r.jsxs(r.Fragment,{children:[r.jsx(n,{...p,image:(d=s.watch("file"))==null?void 0:d[0],onCropComplete:E=>O(E)}),r.jsx(l,{type:"submit",children:"Save"})]})]})})}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var F,S,h;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
