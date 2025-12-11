import{j as r,r as g}from"./iframe-C7yh_Fu5.js";import{b as s,u as a,F as p,t as F}from"./Form-DbkFwRCK.js";import{L as o}from"./Label-oyZIArrA.js";import{R as d,S as c}from"./ResetButton-Bx8rdLAN.js";import{B as u}from"./Button-BwVKQ9X7.js";import{S,s as l}from"./Section-eGYkYIra.js";import{A as b}from"./ActionGroup-DnTsE6iz.js";import{aq as m,g as j}from"./TimeField-Dy-rfgDv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BAOBaIPk.js";import"./PropsContextProvider-C-EG-5z2.js";import"./mergeRefs-g85mVkDf.js";import"./index-Cevz_HyD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DQ2_29OK.js";import"./context-CEhtXY7m.js";import"./browser-DU0Se26V.js";import"./utils-BIDryOLh.js";import"./ProgressBar-hejX-OOI.js";import"./Hidden-Du0bIFmN.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-U8_aSafZ.js";import"./Text-CSanHafV.js";import"./EmulatedBoldText-CiGN-vVw.js";import"./LoadingSpinner-4S8XnzlY.js";import"./Button-iBtMEWbi.js";import"./useFocusRing-C2uVCvlL.js";import"./useFocusable-CCwjyRCK.js";import"./context-w3GWYnpb.js";import"./RSPContexts-DMbDFkhS.js";import"./Collection-BgKMjwD7.js";import"./CollectionBuilder-DKESVVhe.js";import"./SelectionIndicator-Bux7VXrO.js";import"./Separator-Di2JOJWZ.js";import"./useStatic-BPJ4UqdO.js";import"./Accordion-D4DEJSnq.js";import"./Alert-BD9-BdYZ.js";import"./AlertIcon-2MV1Vkb6.js";import"./AlertBadge-D2DN6G_u.js";import"./Align-H7fb-fs1.js";import"./Popover-CQFnWxW5.js";import"./OverlayTrigger-D2xYBiFg.js";import"./TableFooterRow-CVFXLu5s.js";import"./SkeletonText-DnggfzER.js";import"./Avatar-CxKCuxf-.js";import"./AvatarStack-CuhKRn3f.js";import"./Badge-CrGIL66e.js";import"./BigNumber-DhmUzvWc.js";import"./Breadcrumb-0czp_nKF.js";import"./Link-DWHk52qz.js";import"./Heading-gezzzJQU.js";import"./Legend-CBzh6EDX.js";import"./FileCardList-BcFGfAyG.js";import"./Image-CciUOm_j.js";import"./Color-B2lIhlIc.js";import"./Content-CL7mIcPh.js";import"./ContextualHelpTrigger-B1UysYmx.js";import"./CounterBadge-DOJFQA8N.js";import"./DonutChart-PBUZonP2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-VCS6qRmj.js";import"./Header-C9QET4gC.js";import"./Initials-28ES132L.js";import"./InlineCode-xv-tSnAa.js";import"./PopoverTrigger-C9LEo84-.js";import"./Separator-oc_HtEXN.js";import"./Message-BiBJDh9p.js";import"./MessageSeparator-DJOJRQwh.js";import"./NavigationGroup-kwM4BGZf.js";import"./Notification-DLYTxmIW.js";import"./NotificationProvider-BR-b_KFd.js";import"./ProgressBar-BczdTP0z.js";import"./Rating-DCrUaEZd.js";import"./Skeleton-fkyP2s-f.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <Slider formatOptions={{
        style: "unit",
        unit: "gigabyte"
      }} minValue={10} maxValue={100} isInvalid>
          <Label>Storage</Label>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,n as WithFocus,Nr as __namedExportsOrder,Mr as default};
