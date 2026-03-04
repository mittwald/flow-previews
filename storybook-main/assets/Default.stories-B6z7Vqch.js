import{r as g,j as r}from"./iframe-CwpToEZy.js";import{R as t}from"./Rating-C1Fwc5zK.js";import{L as l}from"./Label-BX1OHHkE.js";import{F as R}from"./FieldError-P_YSxT2d.js";import{u as h,F as b,t as F}from"./ResetButton-BvevyXvN.js";import{B as f}from"./Button-Cw2xgR_6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BRui_VYo.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./index-G1voh-81.js";import"./remote-DRomu556.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./context-DWVDZDUv.js";import"./RadioGroup-DDcTedqS.js";import"./utils-3nROwXn_.js";import"./FieldError-BoYVEB6S.js";import"./Text-Cb4d8n7F.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Di0COYqU.js";import"./useLabel-C-XdPLXI.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./SelectionIndicator-ByN8hOyY.js";import"./useFormValidation-pFRcrJM7.js";import"./useFocus-BFSvAolX.js";import"./useFocusRing-CJeIxJct.js";import"./useControlledState-BvlK1ysl.js";import"./FocusScope-CBNoFIyM.js";import"./useFormReset-BARG9uBg.js";import"./usePress-kUL6l53_.js";import"./useFocusable-ixEZOImu.js";import"./VisuallyHidden-CnggHClH.js";import"./useFieldComponent-CneqxYGw.js";import"./useMakeFocusable-DYYj1boi.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B3iqZ-8C.js";import"./AlertIcon-DEQIepDy.js";import"./dynamic-CfOleVAa.js";import"./ActionGroupView-BEWtiWZf.js";import"./Content-04TsN1VN.js";import"./Heading-BXHG1LZb.js";import"./Heading-CAz3skDU.js";import"./RSPContexts-DAz7wbZz.js";import"./Text-DRk3V-Fm.js";import"./browser-DhIaf7O7.js";import"./EmulatedBoldText-YNefbpnq.js";import"./ActionGroup-Cke5umNz.js";import"./getActionGroupSlot-DtR43x--.js";import"./useStatic-CYuvZ5-t.js";import"./Modal-09gASXkd.js";import"./useOverlayController-C-oxUxCp.js";import"./Overlay-B3hqAdST.js";import"./OverlayContextProvider-CBORYkOm.js";import"./LoadingSpinner-CN3jmE_K.js";import"./Dialog-CQ_DXP4m.js";import"./Button-CuwTmUjn.js";import"./ProgressBar-DhACqixk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Df1wGHjd.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./Separator-DijFhA23.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./ActionBatch-DcvnwnMD.js";import"./ButtonView-EQ3fadJN.js";import"./Flex-DxGhnD35.js";import"./useRef-Oq-jnguU.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
