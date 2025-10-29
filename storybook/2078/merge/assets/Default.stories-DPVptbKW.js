import{j as r,r as g}from"./iframe-qTztDmQ9.js";import{R as t}from"./Rating-DVXuLcE6.js";import{L as l}from"./Label-B_HtseH-.js";import{F as R}from"./useFieldComponent-DGEmXGQh.js";import{u as h,F as b,t as F}from"./Form-_TiOEZqw.js";import{B as f}from"./Button-B4S912ZH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DPAJHOeD.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./index-_9O3yG_2.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./context-bFJEZtp8.js";import"./RadioGroup-CPbLrPsT.js";import"./utils-CdWUsvaa.js";import"./Form-D5uPTAwc.js";import"./useLabel-uF6YmIyy.js";import"./Label-Bo8Flsc_.js";import"./Hidden-B1UrvXuA.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Text-B9fEov2V.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFormValidation-DR7MCNfC.js";import"./useFocus-CdJCReig.js";import"./useControlledState-tlJilXH9.js";import"./FocusScope-BLJU626h.js";import"./useFocusRing-hzSL5p2c.js";import"./useFormReset-CmjicI53.js";import"./usePress-Dljjmf_y.js";import"./useFocusable-Q1pEG0eK.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./useMakeFocusable-CCDaBvVW.js";import"./Label.module-CUYTf9Jc.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";import"./browser-D-RoGxAl.js";import"./Action-DjajA33V.js";import"./context-Cf3mID_7.js";import"./useStatic-CJuuYRzf.js";import"./getActionGroupSlot-CA2czWAm.js";import"./dynamic-BKe9EJ7U.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-C9f0aLW8.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./LoadingSpinner-C5H0hepe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJWArbVY.js";import"./ProgressBar-BBefMTke.js";import"./NumberFormatter-DNR9MAW-.js";const hr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const br=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,br as __namedExportsOrder,hr as default};
