import{r as g,j as r}from"./iframe-DepdzLEL.js";import{R as t}from"./Rating-CeydSS7T.js";import{L as l}from"./Label-CprHQXm7.js";import{F as R}from"./FieldError-BU6iaS9f.js";import{u as h,F as b,t as F}from"./ResetButton--NiDVYNh.js";import{B as f}from"./Button-CNIywMH8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DzJyip11.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./index-QBVvmMGX.js";import"./remote-BQ4RO_kW.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./context-BDIAQ50e.js";import"./RadioGroup-DZcceV8X.js";import"./utils-7tdA0jB4.js";import"./FieldError-BblJXfzn.js";import"./Text-CHX4WGB5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C_wI2Oz7.js";import"./useLabel-B2Boz_gi.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./SelectionIndicator-D1BAj3_c.js";import"./useFormValidation-C9ltsd1k.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./useControlledState-BNsQxzmb.js";import"./FocusScope-C6Ou1N9_.js";import"./useFormReset-BQp6BNc9.js";import"./usePress-BqHqHS4f.js";import"./useFocusable-Cun53ew4.js";import"./VisuallyHidden-msEuPEko.js";import"./useFieldComponent-PSzBC9V7.js";import"./useMakeFocusable-DzEgQ6ky.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DwAinVf5.js";import"./AlertIcon-CRbLFRY9.js";import"./dynamic-DyShJQHT.js";import"./ActionGroupView-D0VedWpi.js";import"./Content-BP0iCj4e.js";import"./Heading-BfiUETdQ.js";import"./Heading-Dfg4FmbO.js";import"./RSPContexts-C4BguXQB.js";import"./Text-DQklyFH_.js";import"./browser-DxvLCkxH.js";import"./EmulatedBoldText-MhUupop4.js";import"./ActionGroup-C6xkxQp3.js";import"./getActionGroupSlot-DngwkT4-.js";import"./useStatic-D2N_z3eO.js";import"./Modal-BbNl1Qkg.js";import"./useOverlayController-Br9LJhfN.js";import"./Overlay-CViqvEV6.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./LoadingSpinner-CFbq72U2.js";import"./Dialog-pPKxFXOM.js";import"./Button-BTig9cwD.js";import"./ProgressBar-Db1s_185.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-D9XOfekb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./Separator-Cs836uSa.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./ActionBatch-CxGdjV-j.js";import"./ButtonView-DkAiozhy.js";import"./Flex-DV0RJgp7.js";import"./useRef-DibF1Y9V.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
