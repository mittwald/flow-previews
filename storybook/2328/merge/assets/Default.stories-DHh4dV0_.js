import{r as g,j as r}from"./iframe-olJof__V.js";import{R as t}from"./Rating-CHmeWxDu.js";import{L as l}from"./Label-6dyeRQav.js";import{F as R}from"./FieldError-l4UC5eIi.js";import{u as h,F as b,t as F}from"./ResetButton-BRjZN70o.js";import{B as f}from"./Button-CPlz8rsS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Dxqo3db7.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./index-CQizCcaV.js";import"./remote-BFSWQwUW.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./context-DOTF4vQp.js";import"./RadioGroup-CbhhHe1q.js";import"./utils-B7tchdhx.js";import"./FieldError-kWwHEGnK.js";import"./Text-PinZmeRI.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C73O4P0Z.js";import"./useLabel-CtYRRhYq.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./SelectionIndicator-D2HcZFFA.js";import"./useFormValidation-D5cIPr0y.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./useControlledState-CGGJ5ydn.js";import"./FocusScope-Db9L4ciT.js";import"./useFormReset-BYGWiUrU.js";import"./usePress-UZLq5kUQ.js";import"./useFocusable-3WtiVhvt.js";import"./VisuallyHidden-D0VqbVmf.js";import"./useFieldComponent-BI2nSVzd.js";import"./useMakeFocusable-B2LuhDHE.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DHxSCH5W.js";import"./AlertIcon-DL26tbpe.js";import"./dynamic-C_FBHMxE.js";import"./ActionGroupView-wpokCcfL.js";import"./Content-BTv2gojb.js";import"./Heading-CFjejIim.js";import"./Heading-CZbujKCp.js";import"./RSPContexts-BVirgRiO.js";import"./Text-Dd-S15-B.js";import"./browser-IACFT9IC.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./ActionGroup-7XqXhcJT.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./useStatic-DVdbIJHO.js";import"./Modal-DS-pjQYs.js";import"./useOverlayController-CA843Gf5.js";import"./Overlay-CYa-63WO.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./LoadingSpinner-CT-rb4W5.js";import"./Dialog-DOR07iZd.js";import"./Button-BzbIVXwM.js";import"./ProgressBar-CgXlpLJ2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-B-0VQUib.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./ActionBatch-DqsTFo-5.js";import"./ButtonView-BwM21LNf.js";import"./Flex-6XeWCvWa.js";import"./useRef-BVHeJ4xv.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
