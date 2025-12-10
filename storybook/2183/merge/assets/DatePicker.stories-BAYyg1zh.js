import{j as r,r as j}from"./iframe-B4mFuudk.js";import{b as a,u as p,F as d,t as b}from"./Form-4KzzE2bK.js";import{L as t}from"./Label-J-Qj-TlD.js";import{R as f,S as h}from"./ResetButton-P9jO-qRY.js";import{B as u}from"./Button-D2oQPT9j.js";import{S as E,s as c}from"./Section-B901pmSP.js";import{A as S}from"./ActionGroup-Dj0mL2jT.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-DjPbBOUL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d3DzbtXD.js";import"./PropsContextProvider-C4qYIeXY.js";import"./mergeRefs-CRoU7Hf_.js";import"./index-BF6bNSpW.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CJ3DiWc4.js";import"./context-woxbYNKN.js";import"./browser-CSkgXx8X.js";import"./utils-DO9siV10.js";import"./ProgressBar-B9w8hpj9.js";import"./Hidden-DEoNA7g6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BO1YoHSl.js";import"./remote-CQQC7IgA.js";import"./Text-DWXiWYJa.js";import"./EmulatedBoldText-ekl0jVcs.js";import"./LoadingSpinner-CkjsGIz-.js";import"./Button-D_IfTLYp.js";import"./useFocusRing-Dzyc8_rZ.js";import"./useFocusable-CR7CXVdU.js";import"./context-BaYvtgUx.js";import"./RSPContexts-D4gsSVcd.js";import"./Collection-CRJOH9N4.js";import"./CollectionBuilder-BrBYWzEj.js";import"./SelectionIndicator-Cqxoh0Vk.js";import"./Separator-B1GSGo-v.js";import"./useStatic-BNYxoolq.js";import"./Accordion-CQ4jhonX.js";import"./Alert-BB7E6FS3.js";import"./AlertIcon-C2Iuu0oW.js";import"./AlertBadge-wyAf4fmW.js";import"./Align-tZTYN3_b.js";import"./Popover-EGtBkPGT.js";import"./OverlayTrigger-CxsOgof7.js";import"./TableFooterRow-CF-vtEUL.js";import"./SkeletonText-DYF2L0Gp.js";import"./Avatar-DprwA7VB.js";import"./AvatarStack-DFjdUU0I.js";import"./Badge-DdfeDcq0.js";import"./BigNumber-COKiSbmh.js";import"./Breadcrumb-UixRFNtG.js";import"./Link-dZEW6xbR.js";import"./Heading-x5KcgVW6.js";import"./Legend-D4fqLvje.js";import"./FileCardList-C5pL1TS8.js";import"./Image-C9RETtXb.js";import"./Color-Cnkc4JS2.js";import"./Content-DOFb4Tg_.js";import"./ContextualHelpTrigger-BgOAUkgy.js";import"./CounterBadge-BmaHzZVn.js";import"./DonutChart-fIzr5YTw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPYu5cLC.js";import"./Header-CWN3vvSw.js";import"./Initials-CasgJWHt.js";import"./InlineCode-CBZ_IXgo.js";import"./PopoverTrigger-DfcR0Zu9.js";import"./Separator-BY2NZtun.js";import"./Message-B0duh_V_.js";import"./MessageSeparator-D92QLxsc.js";import"./NavigationGroup-uDY_S4HN.js";import"./Notification-DAh0wl5H.js";import"./NotificationProvider-CUaHGM3W.js";import"./ProgressBar-DQXT7cgB.js";import"./Rating-IIMHkWv7.js";import"./Skeleton-CXrytUBj.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};
