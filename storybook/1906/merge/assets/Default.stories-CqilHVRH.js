import{j as r,r as g}from"./iframe-DBKYLzDC.js";import{R as t}from"./Rating-C3lLFosb.js";import{L as l}from"./Label-Dsk_CpOI.js";import{F as R}from"./FieldError-BpFJPqyd.js";import{u as h,F as b,t as F}from"./ResetButton-ssRCuNTw.js";import{B as f}from"./Button-BFOZVdd1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BvGiLcXk.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./index-Dr37f313.js";import"./remote-CY71mNcv.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./RadioGroup-CXShHvJD.js";import"./utils-BUG9eo0Q.js";import"./FieldError-DtV1i0Hc.js";import"./Text-D7rD6BG6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CPSCXeOA.js";import"./useLabel-BGvoAl80.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./SelectionIndicator-DEY3TFv1.js";import"./useFormValidation-DNSyvwAg.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useControlledState-CAANpQPW.js";import"./FocusScope-D67WIeli.js";import"./useFormReset-BczjDhHV.js";import"./usePress-BZ5qqTtf.js";import"./useFocusable-C-cRLAom.js";import"./VisuallyHidden-BW797Lc5.js";import"./useFieldComponent-DRt8IUS_.js";import"./useMakeFocusable-Bj0ez47p.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";import"./dynamic-C4GhTGlQ.js";import"./useRef-CtdmBt-J.js";import"./Action-CPy4r2qq.js";import"./context-Duo0MdiJ.js";import"./useStatic-DlOT-tNl.js";import"./browser-DhKn1UU2.js";import"./getActionGroupSlot-BnE40Egr.js";import"./ButtonView-CEeOUgiW.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const jr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,jr as __namedExportsOrder,xr as default};
