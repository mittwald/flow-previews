import{j as r,r as j}from"./iframe-BnYuPSwa.js";import{u as d,F as u,t as g,a as h}from"./Form-CTmp9ROp.js";import{B as i}from"./Button-D7B2hjaJ.js";import{S as b}from"./Section-DPXS4_zS.js";import{A as E}from"./ActionGroup-OB84NbT7.js";import{s as f}from"./Action-DJ16dVnI.js";import{A as m,T as l,F as S,O as T}from"./Modal-CMwT1WB3.js";import{L as a}from"./Label-BsOGPmFL.js";import"./index-nuYtCEEu.js";import"./dynamic-Dm-4Ig_M.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./clsx-B-dksMZM.js";import"./index-CqvtBndu.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./context-DQlYt1c9.js";import"./browser-Bkf_ja0R.js";import"./utils-DoWPBSSq.js";import"./IconWarning-BustMFuX.js";import"./Text-DmoS4eOG.js";import"./EmulatedBoldText-DyenmRAR.js";import"./LoadingSpinner-14_SbsZZ.js";import"./Button-C47MeqAR.js";import"./ProgressBar-BRViR90l.js";import"./Hidden-C5Dr68xZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CPn0GoCO.js";import"./useFocusable-bs-iuI5B.js";import"./Dialog-BiHrEAWw.js";import"./RSPContexts-DdoqaBcc.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useControlledState-Cpob7QcG.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";import"./getActionGroupSlot-DLw-maV0.js";import"./useStatic-B3gZPUVa.js";import"./context-CLEKsYXA.js";import"./Popover-CIQAqIV0.js";import"./OverlayTrigger-dzvMh6qS.js";import"./ControlledNotification-DFyhdCgQ.js";import"./ClearPropsContextView-CsEGO0Nn.js";import"./LayoutCard-BqXQhFvn.js";import"./Accordion-DBVhvv3-.js";import"./Alert-Bn9swion.js";import"./AlertIcon-B4i3LjbA.js";import"./AlertBadge-B-Z_FZet.js";import"./Align-qE7NmhZJ.js";import"./TableFooterRow-tTbQ-t0r.js";import"./SkeletonText-D3gw5PRP.js";import"./Avatar-B7jo30ig.js";import"./AvatarStack-GCRCG9vj.js";import"./Badge-BM88wgML.js";import"./BigNumber-DdChOXuv.js";import"./Breadcrumb-30UhIvGz.js";import"./Link-CQXfsiwR.js";import"./Heading-4zkTqPYo.js";import"./Legend-BO-XPcOX.js";import"./FileCardList-CADZDmbR.js";import"./Image-D6oVUh4j.js";import"./CodeBlock-Dx6NJdQY.js";import"./CopyButton-C-PHfocO.js";import"./Tooltip-bYhq-tOp.js";import"./react-children-utilities-DSiaUIOe.js";import"./Color-D8b8dr-e.js";import"./Content-B8GWvRnh.js";import"./ContextualHelpTrigger-9AdY9RaJ.js";import"./CounterBadge-Ca9fUhDU.js";import"./DonutChart-CMqab4Gx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BNBKeAQZ.js";import"./Header-Edj1w5H7.js";import"./Initials-tqv3AKZA.js";import"./InlineCode-CNZzcUkk.js";import"./LabeledValue-BHKpE3hG.js";import"./PopoverTrigger-B1k_GuHv.js";import"./Markdown-BCg6CSiV.js";import"./Separator-CxMrgUmw.js";import"./Message-Bp4nIuQ2.js";import"./MessageSeparator-U6bJZDm5.js";import"./NavigationGroup-D0_CAdq_.js";import"./Notification-DTPhDc6_.js";import"./NotificationProvider-DC5Mfz_i.js";import"./ProgressBar-rB7SKFsx.js";import"./Rating-BSwAqbXq.js";import"./Skeleton-CYJlRTn2.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
