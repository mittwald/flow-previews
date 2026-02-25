import{r as g,j as r}from"./iframe-CFTqgbub.js";import{R as t}from"./Rating-BCT2WyN9.js";import{L as l}from"./Label-GwGXhrLq.js";import{F as R}from"./FieldError-CYjuAiBI.js";import{u as h,F as b,t as F}from"./ResetButton-BsnX_xmS.js";import{B as f}from"./Button-DYo4uywI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BmBcYBZE.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./remote-BlniWp0j.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./RadioGroup-tHEFFAHL.js";import"./utils-B4tY5r2S.js";import"./FieldError-DNv3qA2U.js";import"./Text-Djzy7Vo0.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-XRNm8_rd.js";import"./useLabel-BdtjZifw.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./SelectionIndicator-ex17VsHG.js";import"./useFormValidation-BPzjnfej.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useControlledState-SUsbXgrM.js";import"./FocusScope-BtEv7ihW.js";import"./useFormReset-BbhAN2Ls.js";import"./usePress-DIXZ9Ppe.js";import"./useFocusable-Dm8xzBfk.js";import"./VisuallyHidden-CB7azLHp.js";import"./useFieldComponent-CbaMz5aY.js";import"./useMakeFocusable-BC3RzzjG.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";import"./dynamic-GrVhUXuF.js";import"./ActionGroupView-BE1yaK9j.js";import"./Content-CuF6CEcC.js";import"./Heading-439pSAMO.js";import"./Heading-D2J3_q6l.js";import"./RSPContexts-CFURB7yy.js";import"./Text-DGb4Yj-N.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";import"./ActionGroup-CBwjeAhX.js";import"./getActionGroupSlot-B6jQShKX.js";import"./useStatic-BFPJMVns.js";import"./Modal-bFHglDPM.js";import"./useOverlayController-DR05g40f.js";import"./Overlay-BHE1PsiE.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./Dialog-BnZ8dnOj.js";import"./Button-BKBgz7xZ.js";import"./ProgressBar-Du8sUV-4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-5aYILyU8.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./Separator-BbFY4QIS.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./ActionBatch-D8GPDYy5.js";import"./ButtonView-B-4zjQiO.js";import"./Flex-DlegQ8We.js";import"./useRef-Bmtm6YEx.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
