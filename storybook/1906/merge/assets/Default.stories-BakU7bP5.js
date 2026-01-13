import{j as r,r as f}from"./iframe-S6a6IBGW.js";import{I as s}from"./ImageCropper-CcajbdwS.js";import{d as F}from"./dummyText-CX_I_Wpl.js";import{S}from"./Section-C9-cQ6KY.js";import{F as h}from"./FileField-CU8l6sX0.js";import{B as n}from"./Button-B33IEcV3.js";import{u as x,F as C,t as j}from"./Form-BAvgWy2g.js";import"./ResetButton-CPyRYTgg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Slider-CTgu-q0f.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./IconWarning-D0GzEl3K.js";import"./remote-CCjzztUh.js";import"./utils-B8ercvf4.js";import"./useFieldComponent-C7YS4lAg.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./context-CXquv49b.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./filterDOMProps-i7L6S0l1.js";import"./ProgressBar-f-zsGPPU.js";import"./useLabel-I1naabyM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BHa0sYDq.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocus--oJxMCZo.js";import"./usePress-BUR3MtQf.js";import"./useFormReset-DK3gdO9Q.js";import"./useFocusable-DTyt-kbS.js";import"./VisuallyHidden-BN0xrgav.js";import"./ContextMenuSection-CXnCaYUl.js";import"./Action-D3nLwb6j.js";import"./context-DRdj7qWz.js";import"./useStatic-DJ0VynuZ.js";import"./browser-C6w_OiT9.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./dynamic-wFxxwS8T.js";import"./Dialog-C_QuIxo5.js";import"./Button-BnRrl5N8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DL3JmftS.js";import"./OverlayArrow-B-DFCcpR.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./Text-XPHoRcaC.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./useFormValidation-DHFSk2Ol.js";import"./FieldError-BRuAmhML.js";import"./Input-BCdJg_3v.js";import"./Text-CLecf1p6.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./LoadingSpinner-ngl346gH.js";import"./FieldError-BcgoZm7g.js";import"./AlertText-CIQFF9OC.js";import"./AlertIcon-DgqrgpKu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BzNMjQrs.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Upload/ImageCropper",component:s,render:p=>r.jsx(s,{...p,image:F.imageSrc})},o={},e={args:{aspect:16/9}},t={args:{width:400,height:200}},m={args:{aspect:1,cropShape:"round"}},i={render:p=>{const[c,d]=f.useState(),a=x(),l=j(),u=a.watch("file")?.[0];return r.jsx(C,{form:a,onSubmit:()=>I(c?.name??""),children:r.jsxs(S,{children:[r.jsx(l,{name:"file",children:r.jsx(h,{accept:"image/png, image/jpeg, image/svg",children:r.jsx(n,{variant:"outline",color:"secondary",children:"Select an image"})})}),u&&r.jsxs(r.Fragment,{children:[r.jsx(s,{...p,image:a.watch("file")?.[0],onCropComplete:g=>d(g)}),r.jsx(n,{type:"submit",children:"Save"})]})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    aspect: 16 / 9
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 200
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    aspect: 1,
    cropShape: "round"
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Lr=["Default","CustomAspect","CustomDimensions","RoundShape","WithForm"];export{e as CustomAspect,t as CustomDimensions,o as Default,m as RoundShape,i as WithForm,Lr as __namedExportsOrder,Tr as default};
