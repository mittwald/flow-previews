import{j as r,r as D}from"./iframe-DE21mSiE.js";import{R as t}from"./Rating-EgfcPtP3.js";import{L as l}from"./Label-D6jpl-Ee.js";import{F as P}from"./FieldError-B59qoisB.js";import{u as _,F as k,t as w}from"./Form-CUo_fzaz.js";import{B as A}from"./Button-DdcjdJkJ.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./IconWarning-iWnf9NI2.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./index-ssZEpx-s.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./context-Br9w7yZh.js";import"./RadioGroup-B1uS2wqv.js";import"./utils-DqYJbNsI.js";import"./FieldError-Bu_r-4G9.js";import"./Text-CutbQTmF.js";import"./filterDOMProps-CghfNOdR.js";import"./Form-C4-mbjGM.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./useFormValidation-B0vSubJ3.js";import"./useFocus-CRZNnr1R.js";import"./useControlledState-Bml9wY_-.js";import"./FocusScope-1KdfzaZh.js";import"./useFocusRing-pH6mNL0D.js";import"./useFormReset-BcRO7Ruj.js";import"./usePress-Dv9orCJu.js";import"./useFocusable-AVRnrAkJ.js";import"./VisuallyHidden-pa5WzvsI.js";import"./FormField.module-CqWyJNQI.js";import"./dynamic-BIsQA2QQ.js";import"./browser-BjU0tWvf.js";import"./Action-CR9ahmpz.js";import"./context-6jqGW8Yr.js";import"./useStatic-Cbl6RHQu.js";import"./getActionGroupSlot-CKs13wvK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-DOdVur7X.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ProgressBar-ByrF5SpY.js";import"./NumberFormatter-DNR9MAW-.js";const zr={title:"Content/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},a={},o={args:{size:"s"}},n={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(P,{children:"Please rate"})]})},m={render:e=>{const[c,d]=D.useState(4);return r.jsx(t,{...e,value:c,onChange:z=>d(parseInt(z)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=_({defaultValues:{rating:2}}),c=w();return r.jsxs(k,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}};var u,g,R;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(R=(g=a.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var h,b,F;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(F=(b=o.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var f,x,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,L,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...(v=(L=s.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var y,V,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const Dr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{a as Default,n as ReadOnly,o as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,s as WithLabel,Dr as __namedExportsOrder,zr as default};
