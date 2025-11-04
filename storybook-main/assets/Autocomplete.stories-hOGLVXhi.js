import{j as r,r as j}from"./iframe-BxshUsxH.js";import{u as d,F as u,t as g,a as h}from"./Form-CA-xPwH4.js";import{B as i}from"./Button-HRLIFp2S.js";import{S as b}from"./Section-BZHA2v0g.js";import{A as E}from"./ActionGroup-Dg04WDgn.js";import{s as f}from"./Action-CuTPfi8I.js";import{A as m,T as l,F as S,O as T}from"./Modal-PT7cjgn4.js";import{L as a}from"./Label-Cai8LRw4.js";import"./index-nuYtCEEu.js";import"./dynamic-DbpBUg3_.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./clsx-B-dksMZM.js";import"./index-DKGU8PvL.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";import"./context-jrbRSF4x.js";import"./browser-CjJK-aFI.js";import"./utils-CVs5O02N.js";import"./IconWarning-B98y0Q8s.js";import"./Text-18K6QUAV.js";import"./EmulatedBoldText-DJOIRjYG.js";import"./LoadingSpinner-CLA14IJX.js";import"./Button-BSW16sZi.js";import"./ProgressBar-BPkB7WeA.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DAO3A_Iq.js";import"./useFocusable-BZtorROf.js";import"./Dialog-g1S8F0Mk.js";import"./RSPContexts-B9j1N_uk.js";import"./OverlayArrow-DTdsHQge.js";import"./useControlledState-DZ1PCkag.js";import"./Collection-CF5-K3AD.js";import"./CollectionBuilder-CV9rF_PB.js";import"./SelectionIndicator-BLryBQpM.js";import"./Separator-6zjLgCNw.js";import"./getActionGroupSlot-DSKoPTOH.js";import"./useStatic-B3TheZVH.js";import"./context-Dpzgqk2_.js";import"./Popover-D8mPu2R9.js";import"./OverlayTrigger-DqSMwG9L.js";import"./ControlledNotification-BKvhz06W.js";import"./ClearPropsContextView-Bx13vTxG.js";import"./LayoutCard-DOb3jwRC.js";import"./Accordion-DEPnjlv6.js";import"./Alert-B5lIPS-K.js";import"./AlertIcon-CAIekxtK.js";import"./AlertBadge-CATc84Up.js";import"./Align-DMHcV-Z-.js";import"./TableFooterRow-DdBdlw9v.js";import"./SkeletonText-Bp9OgATd.js";import"./Avatar-BPWVlMTS.js";import"./AvatarStack-BR45Yctn.js";import"./Badge-Bk_g3Swr.js";import"./BigNumber-DnCE5n1M.js";import"./Breadcrumb-DtQ3sVXm.js";import"./Link-C-_Opw-i.js";import"./Heading-DdZYTwhD.js";import"./Legend-CyK7PpxD.js";import"./FileCardList-Cfb5d7AC.js";import"./Image-CcvZpHPH.js";import"./CodeBlock-D0kilfM3.js";import"./CopyButton-BkqTb8K1.js";import"./Tooltip-Bg81ta88.js";import"./react-children-utilities-C2vFZTwt.js";import"./Color-DYQX0n1L.js";import"./Content-BWTtEus_.js";import"./ContextualHelpTrigger-p7RfMObQ.js";import"./CounterBadge-D__9oxv-.js";import"./DonutChart-kkf7Q-Dm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DPGgsGpw.js";import"./Header-CF_4_vNz.js";import"./Initials-BH4vAllU.js";import"./InlineCode-DjaHKjIt.js";import"./LabeledValue-Bj8_T89u.js";import"./PopoverTrigger-Cwh_kwTN.js";import"./Markdown-C3IX7c8c.js";import"./Separator-CfZgi8IV.js";import"./Message-Cqw0c2-b.js";import"./MessageSeparator-Dr08CMNP.js";import"./NavigationGroup-CfAWN36R.js";import"./Notification-DKARu49o.js";import"./NotificationProvider-BmLKCltC.js";import"./ProgressBar-D2EMuaV0.js";import"./Rating-CWqAGodb.js";import"./Skeleton-Cd2redhc.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
