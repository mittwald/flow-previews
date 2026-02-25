import{r as g,j as r}from"./iframe-5GKEjLm3.js";import{R as t}from"./Rating-DnVSZybe.js";import{L as l}from"./Label-BiEVFhkG.js";import{F as R}from"./FieldError-qE1en1IM.js";import{u as h,F as b,t as F}from"./ResetButton-BScoo_H0.js";import{B as f}from"./Button-DbzE4WUt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-B10RUVd-.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./index-CxI-AdtT.js";import"./remote-DrqTcZe1.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./context-CYoVNjzy.js";import"./RadioGroup-_oRyUAXc.js";import"./utils-DZdTZXxi.js";import"./FieldError-DNER0k2B.js";import"./Text-jTefV10v.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CkcBXY70.js";import"./useLabel-sguPTXZB.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./SelectionIndicator-C_xwSetB.js";import"./useFormValidation-Dje-UJVy.js";import"./useFocus-BEqaOfOz.js";import"./useFocusRing-CsUwZj84.js";import"./useControlledState-D9ovZV70.js";import"./FocusScope-BteWf5AP.js";import"./useFormReset-Bzn3Tj6K.js";import"./usePress-CYa1OoRC.js";import"./useFocusable-BDWe4YTb.js";import"./VisuallyHidden-BfZLOvo3.js";import"./useFieldComponent-B3twwSIL.js";import"./useMakeFocusable-B13Rj7my.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BQlCz9t6.js";import"./AlertIcon-xcA2PG-d.js";import"./dynamic-BSdZm6V5.js";import"./ActionGroupView-CkXwMiBE.js";import"./Content-CfJLe_6_.js";import"./Heading-BfDqySHg.js";import"./Heading-kRLjhOcq.js";import"./RSPContexts-AhaMx3-_.js";import"./Text-4Jq61r3V.js";import"./browser-DpyY6Jfh.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./ActionGroup-B4RftQ4W.js";import"./getActionGroupSlot-06aUfNYP.js";import"./useStatic-BQSB_Jfu.js";import"./Modal-lgO2eFy3.js";import"./useOverlayController-DTNq5pfb.js";import"./Overlay-BOgy6OMv.js";import"./OverlayContextProvider-CsuZ0G7f.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./Dialog-BTalxjOJ.js";import"./Button-CslHKHnR.js";import"./ProgressBar-CehyS7IW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-C_Skf-4I.js";import"./Collection-DOmJuy3e.js";import"./CollectionBuilder-DAbTUazM.js";import"./Separator-BxdVDEg-.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./useCollator-COkB7H3x.js";import"./ActionBatch-C4EMIU3M.js";import"./ButtonView-CWXAC1Vh.js";import"./Flex-tVpMcloB.js";import"./useRef-Dk-mLUQr.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
