import{j as r,r as x}from"./iframe-Cir6MTA5.js";import{b as m,u as a,F as p,t as E}from"./Form-DKkjhGjg.js";import{L as s}from"./Label-CD63mnMj.js";import{R as u,S as c}from"./ResetButton-DDMtMKHg.js";import{B as l}from"./Button-C2A0kxO-.js";import{S as j,s as d}from"./Section-CsBFEvqK.js";import{A as b}from"./ActionGroup-CQUlrc02.js";import{r as n,g}from"./TimeField-C03E55-6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C54c6iDK.js";import"./PropsContextProvider-Cm8oeilI.js";import"./mergeRefs-B7VAW6Py.js";import"./index-Ib6Soh3C.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BNOIxokj.js";import"./context-DCFpjcCd.js";import"./browser-DYyRc_is.js";import"./utils-D3-KZmBM.js";import"./ProgressBar-DkofuhmP.js";import"./Hidden-B8OXM-sx.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DBAWKFVr.js";import"./Text-NWoOtLYD.js";import"./EmulatedBoldText-CMuEkZzQ.js";import"./LoadingSpinner-Cbn--oub.js";import"./Button-CVO9gXsi.js";import"./useFocusRing-BaJuMT9x.js";import"./useFocusable-DuTyQoFg.js";import"./context-uB_U-Ll-.js";import"./RSPContexts-DBL9OuDo.js";import"./Collection-DXpzkPD8.js";import"./CollectionBuilder-Dzx_KF2Z.js";import"./SelectionIndicator-C9EgnhSM.js";import"./Separator-DJLduqtA.js";import"./useStatic-lrFYKeJo.js";import"./Accordion--LccsWdU.js";import"./Alert-Cwf4c51S.js";import"./AlertIcon-THsOUfa2.js";import"./AlertBadge-DQEistgl.js";import"./Align-CbiGC6Hm.js";import"./Popover-BnMf836y.js";import"./OverlayTrigger-D8wWf3qw.js";import"./TableFooterRow-Bn7VMJfM.js";import"./SkeletonText-BA7fTM6y.js";import"./Avatar-D1LE7OHQ.js";import"./AvatarStack-BjHAHFtd.js";import"./Badge-Dhmh7ReA.js";import"./BigNumber-Bdldp5Vs.js";import"./Breadcrumb-BgYb3jvA.js";import"./Link-DL2nVgdW.js";import"./Heading-C81Sjkat.js";import"./Legend-DNzEDg1V.js";import"./FileCardList-CdiBIUzb.js";import"./Image-Bmzle01D.js";import"./Color-DwuvilaM.js";import"./Content-sj2198_-.js";import"./ContextualHelpTrigger-Sr6lf3NJ.js";import"./CounterBadge-Blil8ag9.js";import"./DonutChart-CdK4877Z.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BjZ4vO5b.js";import"./Header-BqKpe2dR.js";import"./Initials-DaUoDTnU.js";import"./InlineCode-BDWrnhvQ.js";import"./PopoverTrigger-BDtzPLEN.js";import"./Separator-DYtvdLSf.js";import"./Message-BEPzM24B.js";import"./MessageSeparator-DCUCvEOC.js";import"./NavigationGroup-BZDK6UKv.js";import"./Notification-CZZ3xhm4.js";import"./NotificationProvider-DrRbbE28.js";import"./ProgressBar-DTjakmLk.js";import"./Rating-C6rR6C1R.js";import"./Skeleton-By5OXPEA.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Nr as __namedExportsOrder,Kr as default};
