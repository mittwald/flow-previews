import{r as g,j as r}from"./iframe-CCG9iH9q.js";import{R as t}from"./Rating-BTGWFMGY.js";import{L as l}from"./Label-ZsZ9_LuX.js";import{F as R}from"./FieldError-C6WCZxmP.js";import{u as h,F as b,t as F}from"./ResetButton-BqZNOOe-.js";import{B as f}from"./Button-DszeRQWk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CKuAFgzi.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./index-DO8RY2JU.js";import"./remote-BNVNDlip.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./context-BOE3Zx9s.js";import"./RadioGroup-Bg2znveO.js";import"./utils-BqjYSsY0.js";import"./FieldError-IbwLA4qq.js";import"./Text-CsZp0s5y.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CaeCkx3f.js";import"./useLabel-CWkbOtE9.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./SelectionIndicator-CG-R7p16.js";import"./useFormValidation-Jbp24I-0.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useControlledState-DQCduMNG.js";import"./FocusScope-CGp51FRM.js";import"./useFormReset-DOloisqU.js";import"./usePress-C9nCYq1D.js";import"./useFocusable-C9iBP5e4.js";import"./VisuallyHidden-B8BDvwZm.js";import"./useFieldComponent-BO1aRG8J.js";import"./useMakeFocusable-aEs1MUdl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";import"./dynamic-DVtvH1qO.js";import"./ActionGroupView-BUNvX8yC.js";import"./Content-CtXh-1sB.js";import"./Heading-DiIAAbeS.js";import"./Heading-DVHr5WNM.js";import"./RSPContexts-Cj7-Wn-7.js";import"./Text-CqiRKP9V.js";import"./browser-DlPLk6Tx.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./ActionGroup-CqC9K9e5.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./useStatic-DZaf9Eli.js";import"./Modal-CIlySsMs.js";import"./useOverlayController-B8ExGaeg.js";import"./Overlay-Bt-WcI45.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./LoadingSpinner-GybBfiLr.js";import"./Dialog-Bvzkt_Dq.js";import"./Button-BmDLEeLi.js";import"./ProgressBar-NeUI6tVT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-O5F9zlGE.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./Separator-IezdCtOl.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./ActionBatch-BwDlid4r.js";import"./ButtonView-C8fOFLKK.js";import"./Flex-CGGRYbEQ.js";import"./useRef-BKrfCYqa.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
