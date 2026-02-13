import{r as g,j as r}from"./iframe-DYxqCFL4.js";import{R as t}from"./Rating-B893XJmS.js";import{L as l}from"./Label-DuKZtpj_.js";import{F as R}from"./FieldError-sWm_iZNp.js";import{u as h,F as b,t as F}from"./ResetButton-DZYHoig3.js";import{B as f}from"./Button-DGbEpLIN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BGRYHRhg.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./index-DJ6wSCwd.js";import"./remote-WwxW7fyl.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./context-CfMfa2C9.js";import"./RadioGroup-B3tlOCko.js";import"./utils-C1fpOvwY.js";import"./FieldError-B9AV5Ok7.js";import"./Text-B3xsuc84.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C4EYd143.js";import"./useLabel-mobDYg92.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./SelectionIndicator-D_wBgdeg.js";import"./useFormValidation-FkHTzTfc.js";import"./useFocus-C6GqelOx.js";import"./useFocusRing-Byzp35A7.js";import"./useControlledState-Co5SihOL.js";import"./FocusScope-BC21MQ9n.js";import"./useFormReset-VwcIZGsw.js";import"./usePress-DMR80VPZ.js";import"./useFocusable-8bvqGkWP.js";import"./VisuallyHidden-CZrO0U0i.js";import"./useFieldComponent-DjSvrfgm.js";import"./useMakeFocusable-DjG4Rf0d.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D5ZV5CrS.js";import"./AlertIcon-B9fJ359s.js";import"./dynamic-C8CcPw_G.js";import"./ActionGroupView-DEw0JaMM.js";import"./Content-DzIiqqqA.js";import"./Heading-HOIK8yqY.js";import"./Heading-DbYjHDJK.js";import"./RSPContexts-DXUT3Wo8.js";import"./Text-BnII0mKt.js";import"./browser-CmbZy-PD.js";import"./EmulatedBoldText-D6xSemQT.js";import"./ActionGroup-BmI-EAdu.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./useStatic-BMoi980u.js";import"./Modal-DUoogNsU.js";import"./Overlay-CnLralOh.js";import"./useOverlayController-BZwKG1Aj.js";import"./OverlayContextProvider-tFRc17qj.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./Dialog-CiGSJFZ7.js";import"./Button-BPYpcxnx.js";import"./ProgressBar-Cu5usRFF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-R2NHUYtB.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./Separator-3N5Q9dE4.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./ActionBatch-BfjBVLTQ.js";import"./ButtonView-CL1jDIH8.js";import"./Flex-BH_NinKX.js";import"./useRef-BD_w6wL8.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
