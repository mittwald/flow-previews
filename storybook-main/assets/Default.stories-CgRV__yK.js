import{j as r,r as g}from"./iframe-D6IogGzN.js";import{R as t}from"./Rating-BiUSViFk.js";import{L as l}from"./Label-CevfIrA7.js";import{F as R}from"./FieldError-s9c2Hgmm.js";import{u as h,F as b,t as F}from"./ResetButton-DlmbUMlC.js";import{B as f}from"./Button-4bsuig8G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CDNOZZaQ.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./index-D5OmXbhN.js";import"./remote-ByQLcsaA.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./context-D_0iO3JE.js";import"./RadioGroup-B6kLuIv2.js";import"./utils-DGVDGTqS.js";import"./FieldError-CQOrVEPx.js";import"./Text-CSz0hkcR.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DHrkWV8M.js";import"./useLabel--9PNzusi.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./SelectionIndicator-C7krvdos.js";import"./useFormValidation-CGjfwGDf.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useControlledState-DoPmGGFu.js";import"./FocusScope-DPcfzn1G.js";import"./useFormReset-zYUel0fa.js";import"./usePress-OPUq1uX5.js";import"./useFocusable-CqeTIxtx.js";import"./VisuallyHidden-CtfXU_Om.js";import"./useFieldComponent-DWOteHG6.js";import"./useMakeFocusable-Cptiifns.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";import"./dynamic-DOTSgjbA.js";import"./useRef-DAuBIB6m.js";import"./Action-CdCNq_o6.js";import"./context-C3OW4m7r.js";import"./useStatic-BI3MLON7.js";import"./browser-JB3DJ3rF.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./ButtonView-DebfDMTY.js";import"./Text-DVEzKGc_.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./LoadingSpinner-BmFbjzPt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjufwbKz.js";import"./ProgressBar-DqM5emHd.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
