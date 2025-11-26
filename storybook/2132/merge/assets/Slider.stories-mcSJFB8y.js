import{j as r,r as g}from"./iframe-Ao-19aY7.js";import{b as s,u as a,F as p,t as F}from"./Form-BtqoyCgy.js";import{L as o}from"./Label-AFlDOwlr.js";import{R as d,S as c}from"./ResetButton-BpLwrhXs.js";import{B as u}from"./Button-_rMwV1Xt.js";import{S,s as l}from"./Section-2WoXliP6.js";import{A as b}from"./ActionGroup-BgGdTMdO.js";import{aq as m,g as j}from"./TimeField-Dga-XMzj.js";import"./index-nuYtCEEu.js";import"./dynamic-BWdxymTp.js";import"./PropsContextProvider-Cs2UiszJ.js";import"./mergeRefs-CpqvPaGj.js";import"./index-Bwqp99l-.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8j8z1fr.js";import"./context-7NlFttbo.js";import"./browser-BDaFAJwm.js";import"./utils-WPNuaWF4.js";import"./ProgressBar-BcqTIQAj.js";import"./Hidden-C5KNGjq4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B7Z3gPWk.js";import"./Text-Cgpj2Q8N.js";import"./EmulatedBoldText-RvYGXArR.js";import"./LoadingSpinner-Bt9_hZhS.js";import"./Button-CfbtfR1G.js";import"./useFocusRing-ByqSttt6.js";import"./useFocusable-BMboqtpt.js";import"./context-voT1I8WS.js";import"./RSPContexts-Bd7Uumw6.js";import"./Collection-D6xC-F9z.js";import"./CollectionBuilder-BTcaQmh_.js";import"./SelectionIndicator-M10krl_K.js";import"./Separator-DI5W5_TB.js";import"./useStatic-CAyH9HjC.js";import"./Accordion-g1Nkd-OG.js";import"./Alert-U6NTr8Od.js";import"./AlertIcon-C4DLD5al.js";import"./AlertBadge-ChGUqDlc.js";import"./Align-BbT-h_Cc.js";import"./Popover-wNAiL1x4.js";import"./OverlayTrigger-BCM2xdVL.js";import"./TableFooterRow-BwGlA40j.js";import"./SkeletonText-CbmbZ7fm.js";import"./Avatar-BhBRyywd.js";import"./AvatarStack-BZuHR7nK.js";import"./Badge-BuVQhiwS.js";import"./BigNumber-DSg8ShS_.js";import"./Breadcrumb-COHPTftu.js";import"./Link-NPcLnUZm.js";import"./Heading-QgN9T77K.js";import"./Legend-CpLZYkOf.js";import"./FileCardList-BgWOMS33.js";import"./Image-CdE7kzrE.js";import"./Color-DrlriSBP.js";import"./Content-BC-EzTEV.js";import"./ContextualHelpTrigger-B3G8FKik.js";import"./CounterBadge-Dj5sakNv.js";import"./DonutChart-56Bfv6wo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DWXyrnjp.js";import"./Header-BkTYts4H.js";import"./Initials-DDzHo9v4.js";import"./InlineCode-C5oGO-2D.js";import"./PopoverTrigger-B0RiF3ar.js";import"./Separator-BRXjwrzz.js";import"./Message-CiVygppY.js";import"./MessageSeparator-Di_mCWbl.js";import"./NavigationGroup-JU6xFLtT.js";import"./Notification-BcOA895o.js";import"./NotificationProvider-BTG9WpBj.js";import"./ProgressBar-Db3cRUkt.js";import"./Rating-VGNHCp_t.js";import"./Skeleton-yWgO8i6q.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
