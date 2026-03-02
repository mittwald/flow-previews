import{r as g,j as r}from"./iframe-gtGtPSGX.js";import{R as t}from"./Rating-kLQOjBAA.js";import{L as l}from"./Label-ezDYxAqR.js";import{F as R}from"./FieldError-co03Ctd_.js";import{u as h,F as b,t as F}from"./ResetButton-B2s8Dmn4.js";import{B as f}from"./Button-CvhKZeTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BtUUciVj.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./index-CkPgzcm3.js";import"./remote-DGcAtBID.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./RadioGroup-CWmqPKFV.js";import"./utils-1b_KoCGs.js";import"./FieldError-DenhE7nb.js";import"./Text-B8kBB-Il.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BRxvySUZ.js";import"./useLabel-BqGs6HWh.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./useFormValidation-BQy4AKy0.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useControlledState-a_M_Sxv2.js";import"./FocusScope-d04sRaMv.js";import"./useFormReset-TvJ_gIa-.js";import"./usePress-ub7fcIm5.js";import"./useFocusable-uEYYPBvA.js";import"./VisuallyHidden-D8bGSG_p.js";import"./useFieldComponent-BaX-M8wV.js";import"./useMakeFocusable-SxNAN9f1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";import"./dynamic-CLlIyxqz.js";import"./ActionGroupView-D0kXKbJs.js";import"./Content-BghcAC3J.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./RSPContexts-L8MWaJ6n.js";import"./Text-QzTdDFQg.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./ActionGroup-CLeHwFAs.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./useStatic-CcUMZ2Ma.js";import"./Modal-d042eYeA.js";import"./useOverlayController-ljUuhRV3.js";import"./Overlay-CLrFplCq.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./LoadingSpinner-DnqSg6_k.js";import"./Dialog-_BBlF040.js";import"./Button-Bw2A7mA1.js";import"./ProgressBar-D4vmn95_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-D9TvGvP1.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./ActionBatch-C6WY1Daf.js";import"./ButtonView-VtGuDE6z.js";import"./Flex-D8ogRMIF.js";import"./useRef-IjWKQgTn.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
