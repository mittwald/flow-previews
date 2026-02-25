import{r as g,j as r}from"./iframe-n3VOiEf5.js";import{R as t}from"./Rating-Dh3p9Aso.js";import{L as l}from"./Label-B5oQkcZ-.js";import{F as R}from"./FieldError-DRCS1Gz9.js";import{u as h,F as b,t as F}from"./ResetButton-fxisxfEG.js";import{B as f}from"./Button-gwePC8r8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BKHoIgIa.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./remote-CWx46e_E.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./RadioGroup-AQiffJoY.js";import"./utils-BTX3Dk-t.js";import"./FieldError-IZ2wmqkG.js";import"./Text-BWj5dCJ1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BfOiuDw8.js";import"./useLabel-DpN8AhZi.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./SelectionIndicator-QXVr0AO7.js";import"./useFormValidation-0mLIssn1.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useControlledState-17a16_5D.js";import"./FocusScope-BBR4OeS8.js";import"./useFormReset-C-KjP2af.js";import"./usePress-CVHN3NRW.js";import"./useFocusable-ZTBPsPh1.js";import"./VisuallyHidden-DCK-vxP3.js";import"./useFieldComponent-6hUMLoYk.js";import"./useMakeFocusable-BO09JXR2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";import"./dynamic-DgHDUJEW.js";import"./ActionGroupView-CZAOrVnR.js";import"./Content-D1DgylIT.js";import"./Heading-C6n9bJf2.js";import"./Heading-Dk8PIdV3.js";import"./RSPContexts-DzW0xATd.js";import"./Text-CwVjZxCT.js";import"./browser-DXFXi5M2.js";import"./EmulatedBoldText-eIBSog0P.js";import"./ActionGroup-DCg0s9cx.js";import"./getActionGroupSlot-CP2KeStW.js";import"./useStatic-CMDkRNZz.js";import"./Modal-B-xEtS1E.js";import"./useOverlayController-BNiAcUvH.js";import"./Overlay-DXNeIFBA.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./LoadingSpinner-BZywMYAM.js";import"./Dialog-Be8vTliz.js";import"./Button-Dt8pRNpU.js";import"./ProgressBar-C4tpbq9V.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Tc6q1y2y.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./Separator-XftYj5HO.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./ActionBatch-B7NWJImq.js";import"./ButtonView-CrXGo-AL.js";import"./Flex-i6CO50OO.js";import"./useRef-D3Fh0Wul.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
