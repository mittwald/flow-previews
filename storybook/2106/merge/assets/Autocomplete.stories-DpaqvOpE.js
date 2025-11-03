import{j as r,r as j}from"./iframe-C3RmV_vn.js";import{u as d,F as u,t as g,a as h}from"./Form-9vXoIgsP.js";import{B as i}from"./Button-DaazfuBy.js";import{S as b}from"./Section-BPR37q8p.js";import{A as E}from"./ActionGroup-DaI6rKw9.js";import{s as f}from"./Action-C26yRlV4.js";import{A as m,T as l,F as S,O as T}from"./Modal-CjHUQUiD.js";import{L as a}from"./Label-D3eoPZkV.js";import"./index-nuYtCEEu.js";import"./dynamic-YRcCSNg3.js";import"./flowComponent-DFlBLvPJ.js";import"./index-C-ZjcPlt.js";import"./clsx-B-dksMZM.js";import"./index-hkSQrj3P.js";import"./useLocalizedStringFormatter-ChCCrZ8e.js";import"./context-DCRPXx9V.js";import"./browser-DymlHLTF.js";import"./utils-D8HC0yU-.js";import"./IconWarning-BE2KSBI-.js";import"./Text-CaziZxQU.js";import"./EmulatedBoldText-CI-5ODle.js";import"./LoadingSpinner-DyOalyyw.js";import"./Button-CgyHIJsr.js";import"./ProgressBar-CDrPZwEB.js";import"./Hidden-CChVoDJ-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BIAWuC29.js";import"./useFocusable-C2zASQXP.js";import"./Dialog-K1R3KO66.js";import"./RSPContexts-BOh9wduO.js";import"./OverlayArrow-FKi2RhHZ.js";import"./useControlledState-NromYU6N.js";import"./Collection-D7H86Y8V.js";import"./CollectionBuilder-CsxHJ8eB.js";import"./SelectionIndicator-BJ_0QZSn.js";import"./Separator-ev5cyWKA.js";import"./getActionGroupSlot-BgdQ1S-5.js";import"./useStatic-_h3OjEkL.js";import"./context-BR4xGGrb.js";import"./Popover-BrQ9WlIY.js";import"./OverlayTrigger-IdlugrEk.js";import"./ControlledNotification-CByqMhuw.js";import"./ClearPropsContextView-Brt3ROUs.js";import"./LayoutCard-De9YTy0g.js";import"./Accordion-DeGc61A7.js";import"./Alert-D_C58G56.js";import"./AlertIcon-0DtXBii2.js";import"./AlertBadge-CNKskcx3.js";import"./Align-DNYCt6uS.js";import"./TableFooterRow-BZnfistZ.js";import"./SkeletonText-BpA-RQWQ.js";import"./Avatar-D1juHQpF.js";import"./AvatarStack-C5feK4ne.js";import"./Badge-DG403MXU.js";import"./BigNumber-CgKfebEz.js";import"./Breadcrumb-B0tIpvZK.js";import"./Link-DvQUX475.js";import"./Heading-BU4qnENK.js";import"./Legend-BSZ3J9ai.js";import"./FileCardList-DCQZnQsv.js";import"./Image-B0ryPUSh.js";import"./CodeBlock-DzUKpqG9.js";import"./CopyButton-DlsGGdL3.js";import"./Tooltip-D7tr0CXI.js";import"./react-children-utilities-Mj0r6IMA.js";import"./Color-ByegzaLv.js";import"./Content-DSufA99H.js";import"./ContextualHelpTrigger-BQ6k47a4.js";import"./CounterBadge-Ca1OGzZj.js";import"./DonutChart-6V9LvPQT.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CI4Fulyk.js";import"./Header-DaWWc1Jz.js";import"./Initials-6SKCyCkr.js";import"./InlineCode-CdmNZpBo.js";import"./LabeledValue-Ji1sW1K_.js";import"./PopoverTrigger-nHTqFl4u.js";import"./Markdown-DnuGI4cM.js";import"./Separator-B2g7KZrm.js";import"./Message-DlANTTrI.js";import"./MessageSeparator-750v-t38.js";import"./NavigationGroup-CEkjEBpj.js";import"./Notification-CELsKl2c.js";import"./NotificationProvider-Ceb0o9Cl.js";import"./ProgressBar-DOFcIVSi.js";import"./Rating-Cu404PkR.js";import"./Skeleton-tU7Rn1rq.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
