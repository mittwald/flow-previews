import{j as r,r as S}from"./iframe-B4mFuudk.js";import{u as c,F as d,t as b,b as h}from"./Form-4KzzE2bK.js";import{R as F,S as x}from"./ResetButton-P9jO-qRY.js";import{B as f}from"./Button-D2oQPT9j.js";import{S as E,s as u}from"./Section-B901pmSP.js";import{A as T}from"./ActionGroup-Dj0mL2jT.js";import{c as i,T as l,g as B,O as y}from"./TimeField-DjPbBOUL.js";import{L as p}from"./Label-J-Qj-TlD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d3DzbtXD.js";import"./PropsContextProvider-C4qYIeXY.js";import"./mergeRefs-CRoU7Hf_.js";import"./index-BF6bNSpW.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CJ3DiWc4.js";import"./context-woxbYNKN.js";import"./browser-CSkgXx8X.js";import"./utils-DO9siV10.js";import"./IconWarning-BO1YoHSl.js";import"./remote-CQQC7IgA.js";import"./Text-DWXiWYJa.js";import"./EmulatedBoldText-ekl0jVcs.js";import"./LoadingSpinner-CkjsGIz-.js";import"./Button-D_IfTLYp.js";import"./ProgressBar-B9w8hpj9.js";import"./Hidden-DEoNA7g6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Dzyc8_rZ.js";import"./useFocusable-CR7CXVdU.js";import"./context-BaYvtgUx.js";import"./RSPContexts-D4gsSVcd.js";import"./Collection-CRJOH9N4.js";import"./CollectionBuilder-BrBYWzEj.js";import"./SelectionIndicator-Cqxoh0Vk.js";import"./Separator-B1GSGo-v.js";import"./useStatic-BNYxoolq.js";import"./Accordion-CQ4jhonX.js";import"./Alert-BB7E6FS3.js";import"./AlertIcon-C2Iuu0oW.js";import"./AlertBadge-wyAf4fmW.js";import"./Align-tZTYN3_b.js";import"./Popover-EGtBkPGT.js";import"./OverlayTrigger-CxsOgof7.js";import"./TableFooterRow-CF-vtEUL.js";import"./SkeletonText-DYF2L0Gp.js";import"./Avatar-DprwA7VB.js";import"./AvatarStack-DFjdUU0I.js";import"./Badge-DdfeDcq0.js";import"./BigNumber-COKiSbmh.js";import"./Breadcrumb-UixRFNtG.js";import"./Link-dZEW6xbR.js";import"./Heading-x5KcgVW6.js";import"./Legend-D4fqLvje.js";import"./FileCardList-C5pL1TS8.js";import"./Image-C9RETtXb.js";import"./Color-Cnkc4JS2.js";import"./Content-DOFb4Tg_.js";import"./ContextualHelpTrigger-BgOAUkgy.js";import"./CounterBadge-BmaHzZVn.js";import"./DonutChart-fIzr5YTw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPYu5cLC.js";import"./Header-CWN3vvSw.js";import"./Initials-CasgJWHt.js";import"./InlineCode-CBZ_IXgo.js";import"./PopoverTrigger-DfcR0Zu9.js";import"./Separator-BY2NZtun.js";import"./Message-B0duh_V_.js";import"./MessageSeparator-D92QLxsc.js";import"./NavigationGroup-uDY_S4HN.js";import"./Notification-DAh0wl5H.js";import"./NotificationProvider-CUaHGM3W.js";import"./ProgressBar-DQXT7cgB.js";import"./Rating-IIMHkWv7.js";import"./Skeleton-CXrytUBj.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Jr as __namedExportsOrder,zr as default};
