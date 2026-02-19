import{r as g,j as r}from"./iframe-C9fwoqx7.js";import{R as t}from"./Rating-3p2WFrde.js";import{L as l}from"./Label-DUuytyEq.js";import{F as R}from"./FieldError-v5ZAFD64.js";import{u as h,F as b,t as F}from"./ResetButton-5VnYk-XP.js";import{B as f}from"./Button-C7pOzOnK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-slnz76yl.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./remote-B-ZPT6P_.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./context-C2ecxi5G.js";import"./RadioGroup-CUOJMy1x.js";import"./utils-Cx2L-iDs.js";import"./FieldError-CEVb6xPQ.js";import"./Text-xqSfQxLT.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dcg-_ctE.js";import"./useLabel-BNdvaiV7.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./SelectionIndicator-nEc_xgxs.js";import"./useFormValidation-B19EocOE.js";import"./useFocus-CMKZ5vES.js";import"./useFocusRing-s7_3pCWo.js";import"./useControlledState-BJuMvqvK.js";import"./FocusScope-Ci8EWXmX.js";import"./useFormReset-Bm_Lqolg.js";import"./usePress-tgKXO9PL.js";import"./useFocusable-CQiYog1P.js";import"./VisuallyHidden-1IKUNS-e.js";import"./useFieldComponent-HwWxBPXP.js";import"./useMakeFocusable-BKa3W_CX.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-GfFdH1ck.js";import"./AlertIcon-Bz6wfr4x.js";import"./dynamic-CY0EsCod.js";import"./ActionGroupView-VlMeYrd_.js";import"./Content-CnNXJUgm.js";import"./Heading-XseMYyRS.js";import"./Heading-eUAAoI_I.js";import"./RSPContexts-mF4XBTs4.js";import"./Text-D7jvp7G5.js";import"./browser-B4JTTu9h.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./ActionGroup-JVxcUGRV.js";import"./getActionGroupSlot-CBhaOaw2.js";import"./useStatic-9-ugXzKa.js";import"./Modal-C8ANx43-.js";import"./useOverlayController-CqYUXVnh.js";import"./Overlay-30FGwbPI.js";import"./OverlayContextProvider-DAx33Jid.js";import"./LoadingSpinner-BWPVzhoG.js";import"./Dialog-yhzZwH_k.js";import"./Button-DDn45mdd.js";import"./ProgressBar-Dby2U7oR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DDmkn5_8.js";import"./Collection-C29JJn0j.js";import"./CollectionBuilder-ta_UQL8r.js";import"./Separator-ykHU2h0d.js";import"./SelectionManager-D2Ty-b9W.js";import"./useEvent-bSDrPC6p.js";import"./useCollator-CTWpXcx6.js";import"./ActionBatch-CR9CogXJ.js";import"./ButtonView-D2KaEV6n.js";import"./Flex-kDlMb8kM.js";import"./useRef-DDCCbzfz.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
