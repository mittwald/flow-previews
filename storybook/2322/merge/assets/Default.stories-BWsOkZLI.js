import{r as g,j as r}from"./iframe-jPI25t47.js";import{R as t}from"./Rating-Br5pRPiL.js";import{L as l}from"./Label-CVxkn5sg.js";import{F as R}from"./FieldError-DPfGZS1P.js";import{u as h,F as b,t as F}from"./ResetButton-B5ZX2fMA.js";import{B as f}from"./Button-CMdL10Ys.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D8uDJDej.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./remote-B_as-6Bm.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./RadioGroup-CDbklP88.js";import"./utils-DssEHlsW.js";import"./FieldError-C3mwkvrq.js";import"./Text-BUiBuDRU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeysAUF2.js";import"./useLabel-CJgKbpp_.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./useFormValidation-aAlw1sTR.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useControlledState-CujVadxA.js";import"./FocusScope-QARcb0VX.js";import"./useFormReset-DGTIvKtn.js";import"./usePress-Bv9bKc9w.js";import"./useFocusable-YzLAhItH.js";import"./VisuallyHidden-vrC_Lu36.js";import"./useFieldComponent-CHdLkU8r.js";import"./useMakeFocusable-BecMGTye.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";import"./dynamic-DcvTJJQa.js";import"./ActionGroupView-BqWWBXhU.js";import"./Content-KabCAW67.js";import"./Heading-BYBgSNBh.js";import"./Heading-BvtnHnmW.js";import"./RSPContexts-COITpNJr.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./ActionGroup-19L6oHyS.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./useStatic-Be080qZz.js";import"./Modal-CdjOxPJU.js";import"./Overlay-BMoI33va.js";import"./useOverlayController-Cy5LcSUF.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./LoadingSpinner-DhHtGG23.js";import"./Dialog-C4XHiXzR.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-2srpU7pW.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./ActionBatch-DVEQdHps.js";import"./ButtonView-quZyuTrS.js";import"./Flex-DvdXj1RM.js";import"./useRef-XiRQpzNC.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
