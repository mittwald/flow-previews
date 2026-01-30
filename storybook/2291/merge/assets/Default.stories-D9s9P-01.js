import{j as r,r as g}from"./iframe-1hZ9wzBW.js";import{R as t}from"./Rating-Dn5TL2zW.js";import{L as l}from"./Label-D0cGucr-.js";import{F as R}from"./FieldError-BLPNRQRQ.js";import{u as h,F as b,t as F}from"./ResetButton-B4tSpU0s.js";import{B as f}from"./Button-7Po4DI29.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bq_05zLs.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./index-dx0Fbu95.js";import"./remote-CnwnRZPi.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./context-Dx8Lg4Ma.js";import"./RadioGroup-DVxK5Xf4.js";import"./utils-CnJx27u5.js";import"./FieldError-y4Ibnc6j.js";import"./Text-B1mgaTQV.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BqoDw02I.js";import"./useLabel-CrikywT0.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./SelectionIndicator-22830iwM.js";import"./useFormValidation-yU8XYtwO.js";import"./useFocus-iMNco4FL.js";import"./useFocusRing-DJmPDLK7.js";import"./useControlledState-DAXJPifs.js";import"./FocusScope-Dxs6Wric.js";import"./useFormReset-HcR3N4q2.js";import"./usePress-DNGT1V3C.js";import"./useFocusable-CvXOfqVX.js";import"./VisuallyHidden-UazS1TBU.js";import"./useFieldComponent-B-hW6CDY.js";import"./useMakeFocusable-BFdEdOxW.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D19RpsJk.js";import"./AlertIcon-fApV2-nR.js";import"./dynamic-BsriuUgB.js";import"./useRef-qfDvHpZ7.js";import"./Action-5-LJxdMW.js";import"./context-Ci4eovAp.js";import"./useStatic-BSOtV-Rw.js";import"./browser-jjcexMIs.js";import"./getActionGroupSlot-BJec6nln.js";import"./ButtonView-DUby8yC0.js";import"./Text-BF_GklVB.js";import"./EmulatedBoldText-D3kC_v2V.js";import"./LoadingSpinner-CBIfE8tz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XLqKqFxh.js";import"./ProgressBar-fkOF9esE.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
