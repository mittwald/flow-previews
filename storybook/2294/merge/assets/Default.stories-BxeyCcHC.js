import{j as r,r as g}from"./iframe-BAsHckrK.js";import{R as t}from"./Rating-Ci4FWwmP.js";import{L as l}from"./Label-DVOhOuhT.js";import{F as R}from"./FieldError-ZX2j7DJQ.js";import{u as h,F as b,t as F}from"./ResetButton-DSkmlm83.js";import{B as f}from"./Button-CAoYj-yB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DHq1gdF3.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./index-Cf_R1xcK.js";import"./remote-5f3Q71VQ.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./context-BKg0mO6Y.js";import"./RadioGroup-CxQgMlVd.js";import"./utils-AcXTY-LA.js";import"./FieldError-Ch8lYR65.js";import"./Text-CORhkzC6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BEcGmyNR.js";import"./useLabel-Zs1yjNWV.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./SelectionIndicator-ClkIlDZY.js";import"./useFormValidation-l5tjlCjY.js";import"./useFocus-DSg5hzPG.js";import"./useFocusRing-PAL8hD_p.js";import"./useControlledState-DIA42IR3.js";import"./FocusScope-BSJXv8u1.js";import"./useFormReset-BBc75pQ_.js";import"./usePress-BtuPSsUz.js";import"./useFocusable-DEw7yEFU.js";import"./VisuallyHidden-BIPiOxSh.js";import"./useFieldComponent-uzP_CJXZ.js";import"./useMakeFocusable-m8iNb7YZ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";import"./dynamic-CGZuOMtH.js";import"./useRef-CAXD_NwY.js";import"./useOverlayController-BBLTL3Hv.js";import"./context-BHkWm8Gn.js";import"./useStatic-CHwNqk00.js";import"./Action-WxgR-8km.js";import"./browser-tZCM2k1B.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./ButtonView-ANSEPiju.js";import"./Text-B__BY7tJ.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./LoadingSpinner-fmonyGhO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-v8rEwTVX.js";import"./ProgressBar-BYgBobO-.js";import"./NumberFormatter-DNR9MAW-.js";const jr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
