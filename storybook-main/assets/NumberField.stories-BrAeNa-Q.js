import{j as r,r as x}from"./iframe-C7yh_Fu5.js";import{b as a,u as l,F as d,t as j}from"./Form-DbkFwRCK.js";import{L as o}from"./Label-oyZIArrA.js";import{R as c,S as f}from"./ResetButton-Bx8rdLAN.js";import{B as p}from"./Button-BwVKQ9X7.js";import{S as g,s as u}from"./Section-eGYkYIra.js";import{A as b}from"./ActionGroup-DnTsE6iz.js";import{N as t,v as E,g as S}from"./TimeField-Dy-rfgDv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BAOBaIPk.js";import"./PropsContextProvider-C-EG-5z2.js";import"./mergeRefs-g85mVkDf.js";import"./index-Cevz_HyD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DQ2_29OK.js";import"./context-CEhtXY7m.js";import"./browser-DU0Se26V.js";import"./utils-BIDryOLh.js";import"./ProgressBar-hejX-OOI.js";import"./Hidden-Du0bIFmN.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-U8_aSafZ.js";import"./Text-CSanHafV.js";import"./EmulatedBoldText-CiGN-vVw.js";import"./LoadingSpinner-4S8XnzlY.js";import"./Button-iBtMEWbi.js";import"./useFocusRing-C2uVCvlL.js";import"./useFocusable-CCwjyRCK.js";import"./context-w3GWYnpb.js";import"./RSPContexts-DMbDFkhS.js";import"./Collection-BgKMjwD7.js";import"./CollectionBuilder-DKESVVhe.js";import"./SelectionIndicator-Bux7VXrO.js";import"./Separator-Di2JOJWZ.js";import"./useStatic-BPJ4UqdO.js";import"./Accordion-D4DEJSnq.js";import"./Alert-BD9-BdYZ.js";import"./AlertIcon-2MV1Vkb6.js";import"./AlertBadge-D2DN6G_u.js";import"./Align-H7fb-fs1.js";import"./Popover-CQFnWxW5.js";import"./OverlayTrigger-D2xYBiFg.js";import"./TableFooterRow-CVFXLu5s.js";import"./SkeletonText-DnggfzER.js";import"./Avatar-CxKCuxf-.js";import"./AvatarStack-CuhKRn3f.js";import"./Badge-CrGIL66e.js";import"./BigNumber-DhmUzvWc.js";import"./Breadcrumb-0czp_nKF.js";import"./Link-DWHk52qz.js";import"./Heading-gezzzJQU.js";import"./Legend-CBzh6EDX.js";import"./FileCardList-BcFGfAyG.js";import"./Image-CciUOm_j.js";import"./Color-B2lIhlIc.js";import"./Content-CL7mIcPh.js";import"./ContextualHelpTrigger-B1UysYmx.js";import"./CounterBadge-DOJFQA8N.js";import"./DonutChart-PBUZonP2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-VCS6qRmj.js";import"./Header-C9QET4gC.js";import"./Initials-28ES132L.js";import"./InlineCode-xv-tSnAa.js";import"./PopoverTrigger-C9LEo84-.js";import"./Separator-oc_HtEXN.js";import"./Message-BiBJDh9p.js";import"./MessageSeparator-DJOJRQwh.js";import"./NavigationGroup-kwM4BGZf.js";import"./Notification-DLYTxmIW.js";import"./NotificationProvider-BR-b_KFd.js";import"./ProgressBar-BczdTP0z.js";import"./Rating-DCrUaEZd.js";import"./Skeleton-fkyP2s-f.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Hr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
