import{j as r,r as D}from"./iframe-DW8JgK09.js";import{R as t}from"./Rating-CJtAxB0z.js";import{L as l}from"./Label-DSYT14js.js";import{F as P}from"./FieldError-DC6xH_3a.js";import{u as _,F as k,t as w}from"./Form-CbwLg-A7.js";import{B as A}from"./Button-DVfVMpGI.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bj3cOyEj.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./index-7zpoyBXT.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./context-MVg0njeL.js";import"./RadioGroup--lVImVMb.js";import"./utils-qQbsMKok.js";import"./FieldError-D4VyS34i.js";import"./Text-Dj-iJoJL.js";import"./filterDOMProps-CghfNOdR.js";import"./Form-DQnvx-Rv.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./SelectionIndicator-CLj4WkbT.js";import"./useFormValidation-BJNwWy_2.js";import"./useFocus-BeoGO6Gw.js";import"./useControlledState-BE2AOUIF.js";import"./FocusScope-BFAEdpe6.js";import"./useFocusRing-GKfEZ5du.js";import"./useFormReset-DWeezvOC.js";import"./usePress-Gti5y3pG.js";import"./useFocusable-ClSVLyWP.js";import"./VisuallyHidden-Da3g07dP.js";import"./FormField.module-CqWyJNQI.js";import"./dynamic-B0cR68qH.js";import"./browser-Ddqyq5_4.js";import"./Action-CbSL4lf7.js";import"./context-BXN8qI2U.js";import"./useStatic-Dd3Fa8_Q.js";import"./getActionGroupSlot-GOPGQ3I0.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-DqrSOA-D.js";import"./EmulatedBoldText-C-FDCcHS.js";import"./LoadingSpinner-3AaEPCkk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B7FVzAyg.js";import"./ProgressBar-CK1_umDo.js";import"./NumberFormatter-DNR9MAW-.js";const zr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(P,{children:"Please rate"})]})},m={render:e=>{const[c,d]=D.useState(4);return r.jsx(t,{...e,value:c,onChange:z=>d(parseInt(z)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=_({defaultValues:{rating:2}}),c=w();return r.jsxs(k,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}};var u,g,R;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(R=(g=o.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var h,b,F;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(F=(b=a.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var f,x,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,L,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...(v=(L=n.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var y,V,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var W,C,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...(O=(C=m.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var B,I,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const Dr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,Dr as __namedExportsOrder,zr as default};
