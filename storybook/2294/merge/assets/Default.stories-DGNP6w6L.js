import{j as r,r as g}from"./iframe-Da9Lw8R_.js";import{R as t}from"./Rating-DdoLJ3Z0.js";import{L as l}from"./Label-D7d2SkgN.js";import{F as R}from"./FieldError-DXoqYbez.js";import{u as h,F as b,t as F}from"./ResetButton-DAXeM7OM.js";import{B as f}from"./Button-CkcTXATp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BYkwpstY.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./index-TT_JC2bB.js";import"./remote-CsFbcl9r.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./context-CsdpTyhd.js";import"./RadioGroup-DLyQ-pHJ.js";import"./utils-Cwd4tFKX.js";import"./FieldError-DSdSdK3H.js";import"./Text-CpGlsQu3.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D3ZAWear.js";import"./useLabel-CzV-HlgB.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./SelectionIndicator-DjHwUAme.js";import"./useFormValidation-DjSyrx87.js";import"./useFocus-BBVXnzgP.js";import"./useFocusRing-BItT14i_.js";import"./useControlledState-B4YxKAgg.js";import"./FocusScope-BpnzFkst.js";import"./useFormReset-4DR8Px1h.js";import"./usePress-BIogNAwh.js";import"./useFocusable-CwPW854N.js";import"./VisuallyHidden-gkajg-fe.js";import"./useFieldComponent-yufHgNqa.js";import"./useMakeFocusable-CrspawdT.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";import"./dynamic-bM8H28Zu.js";import"./useRef-Dm7IxWdg.js";import"./useOverlayController-DXJN5Feb.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./Action-CSMihAu4.js";import"./browser-DDWH8I0V.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./ButtonView-C0Td427Q.js";import"./Text-l_fYsQ08.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./LoadingSpinner-DXGsR4uF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CzbwBi45.js";import"./ProgressBar-Chvpo8FD.js";import"./NumberFormatter-DNR9MAW-.js";const jr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Sr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,Sr as __namedExportsOrder,jr as default};
