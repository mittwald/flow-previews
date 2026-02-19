import{r as g,j as r}from"./iframe-CaMmm6JB.js";import{R as t}from"./Rating-pYRy0Vqq.js";import{L as l}from"./Label-7z5ZqOim.js";import{F as R}from"./FieldError-gBRSHyIP.js";import{u as h,F as b,t as F}from"./ResetButton-DZiVofRK.js";import{B as f}from"./Button-Ccdb4ZyB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CjIU5uAw.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./index-bUizOk6y.js";import"./remote-B2IWJRNM.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./context-COlkIlq2.js";import"./RadioGroup-DN-BoxQp.js";import"./utils-BWel_6vJ.js";import"./FieldError-rN2a2i1l.js";import"./Text-DltKapPO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DUaYRZYC.js";import"./useLabel-BlkmcG0L.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./SelectionIndicator-C8xVf-92.js";import"./useFormValidation-BBrrlMUS.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./useControlledState-DS3iWteE.js";import"./FocusScope-BSI7m-fZ.js";import"./useFormReset-B22K348z.js";import"./usePress-Bq52eadg.js";import"./useFocusable-D5loONxI.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./useFieldComponent-l9GEjfOW.js";import"./useMakeFocusable-CThcCwV5.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";import"./dynamic-CCT0rfWD.js";import"./ActionGroupView-SXd6Ahs2.js";import"./Content-D39bfGls.js";import"./Heading-6UA8ouUH.js";import"./Heading-DZNcobqI.js";import"./RSPContexts-HzcDbyvj.js";import"./Text-BytpHB1v.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./ActionGroup-C2ezmeu7.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./useStatic-CQKXHPrs.js";import"./Modal-D-BKA9RG.js";import"./useOverlayController-DaRRxB6Y.js";import"./Overlay-DFrCfT03.js";import"./OverlayContextProvider-_LkIzv60.js";import"./LoadingSpinner-D3IBMWR2.js";import"./Dialog-YsZQ1_o0.js";import"./Button-Br8oe_nB.js";import"./ProgressBar-CBFdsoCo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BudvLkgn.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./ActionBatch-Q41d4eeq.js";import"./ButtonView-VN2wxJGS.js";import"./Flex-BB0MY87d.js";import"./useRef-6651uh8r.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
