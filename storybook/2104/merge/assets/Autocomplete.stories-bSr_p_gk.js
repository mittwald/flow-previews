import{j as r,r as j}from"./iframe-CXJD44gU.js";import{u as d,F as u,t as g,a as h}from"./Form-DeLPQYfM.js";import{B as i}from"./Button-Cqh03G4a.js";import{S as b}from"./Section-C4fj5Uhb.js";import{A as E}from"./ActionGroup-D292NLNL.js";import{s as f}from"./Action-3nbS0LG3.js";import{A as m,T as l,F as S,O as T}from"./Modal-BpR0AIl0.js";import{L as a}from"./Label-CHgl7mam.js";import"./index-nuYtCEEu.js";import"./dynamic-By6FwFol.js";import"./flowComponent-BFLjIfgO.js";import"./index-BSMrjjpe.js";import"./clsx-B-dksMZM.js";import"./index-CRJWytS4.js";import"./useLocalizedStringFormatter-Cml1CPb-.js";import"./context-FTDoYYrb.js";import"./browser-BB5suZC2.js";import"./utils-BNVflTSU.js";import"./IconWarning-BGBHXtCn.js";import"./Text-D7qfRA1L.js";import"./EmulatedBoldText-BVX9n63_.js";import"./LoadingSpinner-GTDlM8Wf.js";import"./Button-BYCRTXMY.js";import"./ProgressBar-DkMPzF4_.js";import"./Hidden-DV6zenYn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B8UGa5Q8.js";import"./useFocusable-BH-e1Dk3.js";import"./Dialog-0oqd1mPP.js";import"./RSPContexts-DduoqfxZ.js";import"./OverlayArrow-D2uhXVaI.js";import"./useControlledState-Bnjej2q1.js";import"./Collection-DYOHqOtc.js";import"./CollectionBuilder-D4Pa1_Ag.js";import"./SelectionIndicator-CQbg55hv.js";import"./Separator-FNjaa8bX.js";import"./getActionGroupSlot-B4xny-oM.js";import"./useStatic-Dhs2fcV6.js";import"./context-CQFOhjaS.js";import"./Popover-BkL35Kgm.js";import"./OverlayTrigger-CG63jM03.js";import"./ControlledNotification-CcIZA-Lf.js";import"./ClearPropsContextView-CQgAJ6wW.js";import"./LayoutCard-BQ5ezla0.js";import"./Accordion-Bj27BqHz.js";import"./Alert-C1LKtwr3.js";import"./AlertIcon-D9uZzc44.js";import"./AlertBadge-0ly9k36p.js";import"./Align-C_lRlCFk.js";import"./TableFooterRow-BBOrGqj2.js";import"./SkeletonText-BbctJOCV.js";import"./Avatar-E5uMknVI.js";import"./AvatarStack-DclY_dZp.js";import"./Badge-BzcGSwdk.js";import"./BigNumber-DXHoNC3I.js";import"./Breadcrumb-BjLJfUge.js";import"./Link-DiqcoEP6.js";import"./Heading-BqJcdYMf.js";import"./Legend-AgQ5Azi9.js";import"./FileCardList-BIAQaiiD.js";import"./Image-B85nW0l4.js";import"./CodeBlock-C0vU8UC8.js";import"./CopyButton-CykQYOAE.js";import"./Tooltip-CqIq6Zy5.js";import"./react-children-utilities-kGfg2sgw.js";import"./Color-D60gh5no.js";import"./Content-BcWGfTxO.js";import"./ContextualHelpTrigger-fA-EYHMX.js";import"./CounterBadge-BPDnJgLw.js";import"./DonutChart-CdTDK19_.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DFg7T8Xg.js";import"./Header-B_quMRYt.js";import"./Initials-xmMGVfq4.js";import"./InlineCode-CYRFQk4l.js";import"./LabeledValue-Dq4eg6f0.js";import"./PopoverTrigger-CxS2VuOB.js";import"./Markdown-DXgOGEAm.js";import"./Separator-BEFSvNVJ.js";import"./Message-BLm14bIo.js";import"./MessageSeparator-HYi6VZTX.js";import"./NavigationGroup-DbBmwSaG.js";import"./Notification-D9-cNcGL.js";import"./NotificationProvider-DYXHSDNp.js";import"./ProgressBar-DuiZQfN7.js";import"./Rating-BCPsPc_Q.js";import"./Skeleton-BLYXe0ue.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const se=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,se as __namedExportsOrder,me as default};
