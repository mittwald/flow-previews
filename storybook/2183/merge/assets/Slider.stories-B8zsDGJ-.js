import{j as r,r as g}from"./iframe-DNac-Rqf.js";import{b as s,u as a,F as p,t as F}from"./Form-BbGFvx7t.js";import{L as o}from"./Label-CblnI0HW.js";import{R as d,S as c}from"./ResetButton-CxGO8Txt.js";import{B as u}from"./Button-CUSLqQMc.js";import{S,s as l}from"./Section-DvtlFJN0.js";import{A as b}from"./ActionGroup-HKL5W0AJ.js";import{as as m,g as j}from"./TimeField-DpY9PVqh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYsIbK1A.js";import"./PropsContextProvider-C_xkOl2m.js";import"./mergeRefs-CMWgjpmK.js";import"./index--GDWo6c1.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BLbNTQNm.js";import"./context-g2-sYTkT.js";import"./browser-nJ4CE5Oc.js";import"./utils-BduO7XRu.js";import"./ProgressBar-Cg_AUX6O.js";import"./Hidden-DGwLcp0N.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cg768Zjl.js";import"./remote-DNzJzz_i.js";import"./Text-D0ZE_3Re.js";import"./EmulatedBoldText-Dq-fgG2H.js";import"./LoadingSpinner-lobDwtPy.js";import"./Button-jJfhABmc.js";import"./useFocusRing-Dh9thb9f.js";import"./useFocusable-rb0lSnzN.js";import"./context-CZdohShl.js";import"./RSPContexts-Cd6lFFaf.js";import"./Collection-igBrAvIn.js";import"./CollectionBuilder-qxwNBjxK.js";import"./SelectionIndicator-C4Ae8ohN.js";import"./Separator-DHka8Fv6.js";import"./useStatic-ihim0ckM.js";import"./Accordion-BpjGjdfu.js";import"./Alert-C4SmUy15.js";import"./AlertIcon-BCoAEyQh.js";import"./AlertBadge-B4Gw2oem.js";import"./Align-BYSxjVaI.js";import"./Popover-Cv71dRgv.js";import"./OverlayTrigger-BBjUB5WE.js";import"./TableFooterRow-TOZfCvNN.js";import"./SkeletonText-Dtz0dWFM.js";import"./Avatar-C3ls42ZT.js";import"./AvatarStack-CB7huUjR.js";import"./Badge-BTPi5GTz.js";import"./BigNumber-C6J1IAVW.js";import"./Breadcrumb-CusU5TRR.js";import"./Link-Ddteou-D.js";import"./Heading-B9C-Q8d_.js";import"./Legend-C843Nwot.js";import"./FileCardList-C3A0Rc32.js";import"./Image-D-F7EiiO.js";import"./Color-DOa8qdv1.js";import"./Content-ze7-zRt3.js";import"./ContextualHelpTrigger-BMAda_hh.js";import"./CounterBadge-BP5WHUxC.js";import"./DonutChart-ChhISA-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B3WFXRVC.js";import"./Header-D32huwY0.js";import"./Initials-By4hdRc1.js";import"./InlineCode-BSZYsfjr.js";import"./PopoverTrigger-CtfZ1cKH.js";import"./Separator-T5QLy1gm.js";import"./Message-B9f-cPpE.js";import"./MessageSeparator-C2jALfgb.js";import"./NavigationGroup-D3e0XJsj.js";import"./Notification-BzWIEsEu.js";import"./NotificationProvider-BnmgoZU5.js";import"./ProgressBar-DEEkwCFH.js";import"./Rating-C_CSOchR.js";import"./Skeleton-CSWR-u_J.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Nr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,n as WithFocus,Ur as __namedExportsOrder,Nr as default};
