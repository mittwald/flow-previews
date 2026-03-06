import{r as g,j as r}from"./iframe-BLMVSPV3.js";import{R as t}from"./Rating-BfMEd5nl.js";import{L as l}from"./Label-C8Rr5uKt.js";import{F as R}from"./FieldError-C9r0kVik.js";import{u as h,F as b,t as F}from"./ResetButton-C6SwIYKJ.js";import{B as f}from"./Button-RfhP7QLX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DFK0SIT3.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./index-B-iUx4vd.js";import"./remote-B_iWR4WH.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./context-BPm1HUwp.js";import"./RadioGroup-CjRC_teq.js";import"./utils-je6Mfjnf.js";import"./FieldError-CUXp9-J-.js";import"./Text-DPHxU6u7.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CkFb-Mj9.js";import"./useLabel-DcRiwsCk.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./SelectionIndicator-MBj-w85S.js";import"./useFormValidation-CsmzuQo6.js";import"./useFocus-B92CKOsl.js";import"./useFocusRing-IVoDVSxb.js";import"./useControlledState-Bp8O9Zqw.js";import"./FocusScope-uhT9mVfL.js";import"./useFormReset-7ZGeCzym.js";import"./usePress-DgsdN2D5.js";import"./useFocusable-DsXmOaAq.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./useFieldComponent-y-VnQdYS.js";import"./useMakeFocusable-BZckWT91.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Btk8Ksd_.js";import"./AlertIcon-BrGMsY0L.js";import"./dynamic-DAjDUp_G.js";import"./ActionGroupView-Ck11gez5.js";import"./Content-DUxgSWC5.js";import"./Heading-BFhkb_kv.js";import"./Heading-DGpyEp1Z.js";import"./RSPContexts-BTwsU_Cp.js";import"./Text-CGLO_VNW.js";import"./browser-CtcijgRV.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./ActionGroup-BE2BWOAA.js";import"./getActionGroupSlot-BdFM70uG.js";import"./useStatic-BWoTOt9k.js";import"./Modal-Bevsmrtz.js";import"./useOverlayController-DYQ-WflD.js";import"./Overlay-CEllIMRS.js";import"./OverlayContextProvider-D_krly58.js";import"./LoadingSpinner-BCnxKzgI.js";import"./Dialog-BT74UQ_T.js";import"./Button-4lGsfIj0.js";import"./ProgressBar-qhTm7W5b.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DqBJvRH_.js";import"./Collection-D_0q5y9E.js";import"./CollectionBuilder-DVFPK5dr.js";import"./Separator-CN6eRPM4.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./useCollator-DnWD9muh.js";import"./ActionBatch-Cx_n21HW.js";import"./ButtonView-BFvaDy1U.js";import"./Flex-DMIA7a_N.js";import"./useRef-Bngm3SGC.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const wr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,wr as __namedExportsOrder,kr as default};
