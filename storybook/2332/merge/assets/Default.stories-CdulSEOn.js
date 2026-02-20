import{r as g,j as r}from"./iframe-BF3zk0it.js";import{R as t}from"./Rating-DCVwLMlJ.js";import{L as l}from"./Label-DcRc8bay.js";import{F as R}from"./FieldError-C2kAtlyK.js";import{u as h,F as b,t as F}from"./ResetButton-UxrlNzUI.js";import{B as f}from"./Button-ZNdemegp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BmoaMC54.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./index-S59XLRls.js";import"./remote-CJL-gtYq.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./context-B_W42rBs.js";import"./RadioGroup-CMgaRnEi.js";import"./utils-Ds629Okb.js";import"./FieldError-WTvIa9hl.js";import"./Text-CwwNB0nU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-r-oZJvOh.js";import"./useLabel-CnUcYl5P.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./SelectionIndicator-DPkZaIrz.js";import"./useFormValidation-Clvn3NKc.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useControlledState-ChKdFYY_.js";import"./FocusScope-YXqkLzes.js";import"./useFormReset-Dd7cUUSK.js";import"./usePress-DqnzUH3I.js";import"./useFocusable-BWie7cw6.js";import"./VisuallyHidden-P8G91P8h.js";import"./useFieldComponent-Z2yLJYUo.js";import"./useMakeFocusable-CNDpUSUP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";import"./dynamic-DMyjxIhV.js";import"./ActionGroupView-DXV0SNwP.js";import"./Content-DDW4skoa.js";import"./Heading-Dtu6R2J5.js";import"./Heading-N6x-j70c.js";import"./RSPContexts-ssfE85JL.js";import"./Text-C9_U4GIb.js";import"./browser-Cxel5Cqf.js";import"./EmulatedBoldText-tEygNJi1.js";import"./ActionGroup-DJsQWQF2.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./useStatic-B_2dxxhv.js";import"./Modal-CVbQ3im3.js";import"./useOverlayController-CjUKcEGt.js";import"./Overlay-CyMqAfYA.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./LoadingSpinner-BryS_W8u.js";import"./Dialog-IYHamviF.js";import"./Button-CioOZKSP.js";import"./ProgressBar-wD5S60Ia.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CX6asWYb.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./ActionBatch-DvnrQlZS.js";import"./ButtonView-CID7lXee.js";import"./Flex-Box9uTPb.js";import"./useRef-C7wP-y9c.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
