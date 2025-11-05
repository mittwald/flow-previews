import{j as r,r as j}from"./iframe-B0zV29Ol.js";import{u as d,F as u,t as g,a as h}from"./Form-C77AFJS3.js";import{B as i}from"./Button-DMc7qjuD.js";import{S as b}from"./Section-c6k8H6l6.js";import{A as E}from"./ActionGroup-x0yzCgdG.js";import{s as f}from"./Action-D4O6uaws.js";import{A as m,T as l,F as S,O as T}from"./Modal-CjWjucPV.js";import{L as a}from"./Label-CO7dcuDN.js";import"./index-nuYtCEEu.js";import"./dynamic-BDcWjd3V.js";import"./flowComponent-BsAK2ls3.js";import"./index-BYMF1jLH.js";import"./clsx-B-dksMZM.js";import"./index-Bap8DgrM.js";import"./useLocalizedStringFormatter-DAIqrt-k.js";import"./context-CJ74nGTM.js";import"./browser-D-MgOzku.js";import"./utils-rMLWZEZ9.js";import"./IconWarning-DElUfIyP.js";import"./Text-DNMpJh06.js";import"./EmulatedBoldText-Z1g7CMab.js";import"./LoadingSpinner-91ddITMV.js";import"./Button-B7c7aZAn.js";import"./ProgressBar-BR-tdA5k.js";import"./Hidden-CLtGdy91.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BkkYWklx.js";import"./useFocusable-CfhrO7WS.js";import"./Dialog-CW1wDwL9.js";import"./RSPContexts-C-9bKQ2R.js";import"./OverlayArrow-CvdWoYZq.js";import"./useControlledState-BMTFuSH8.js";import"./Collection-xKdqQ5gP.js";import"./CollectionBuilder-CGg5wqK9.js";import"./SelectionIndicator-BwpruQVu.js";import"./Separator-DZUrDISg.js";import"./getActionGroupSlot-CT-ODnzp.js";import"./useStatic-CBy74o7G.js";import"./context-UMFNSY2K.js";import"./Popover-D1TtYLmJ.js";import"./OverlayTrigger-Bi2UH0iH.js";import"./ControlledNotification-DjEB_H58.js";import"./ClearPropsContextView-DoK20Ig-.js";import"./LayoutCard-BpoFrQi6.js";import"./Accordion-BzC4nNU-.js";import"./Alert-CYBL3WAx.js";import"./AlertIcon-C4QVJ3jz.js";import"./AlertBadge-NbeQvqGG.js";import"./Align-CqKWkhSS.js";import"./TableFooterRow-CC_ko3N8.js";import"./SkeletonText-D9EW_GgS.js";import"./Avatar-YRFl0AXp.js";import"./AvatarStack-21HFF-yb.js";import"./Badge-VD94JE7p.js";import"./BigNumber-CHXNC1Jz.js";import"./Breadcrumb-DOEz6B-8.js";import"./Link-CXiCVjqZ.js";import"./Heading-DWho-b1a.js";import"./Legend-Cipm40qu.js";import"./FileCardList-DqUU9P5F.js";import"./Image-CIQLgEEc.js";import"./CodeBlock-DWiDUE3v.js";import"./CopyButton-CXPEUJji.js";import"./Tooltip-C70bKdpZ.js";import"./react-children-utilities-D2PRRlI6.js";import"./Color-DgZP7MPp.js";import"./Content-ByGcGhCL.js";import"./ContextualHelpTrigger-BH-AywGu.js";import"./CounterBadge-83Oosp8g.js";import"./DonutChart-Bg_cE2a6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D7GonCXS.js";import"./Header-95pkJ2a4.js";import"./Initials-BdpPEY0M.js";import"./InlineCode-CO--Wx6Z.js";import"./LabeledValue-B75o_32R.js";import"./PopoverTrigger-CF0yGiLp.js";import"./Markdown-Bd7-dk-r.js";import"./Separator-BLAV0fah.js";import"./Message-DmO3EG3E.js";import"./MessageSeparator-CIFoWUWf.js";import"./NavigationGroup-6FYJowsC.js";import"./Notification-Bao42zCB.js";import"./NotificationProvider-CzLBmS1d.js";import"./ProgressBar-D-Sdoekq.js";import"./Rating-CraoL8Qg.js";import"./Skeleton-CpnSw1eA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
