import{j as r,r as j}from"./iframe-Gppgd95h.js";import{u as d,F as u,t as g,a as h}from"./Form-DVG-0XJ0.js";import{B as i}from"./Button-CQheULfL.js";import{S as b}from"./Section-CNS9p5rv.js";import{A as E}from"./ActionGroup-DDS_PemV.js";import{s as f}from"./Action-BLHsH70P.js";import{A as m,T as l,F as S,O as T}from"./Modal-D3Hcgjxi.js";import{L as a}from"./Label-fQiFxC8W.js";import"./index-nuYtCEEu.js";import"./dynamic-Dx_-BW_E.js";import"./flowComponent-CBC2W0-6.js";import"./index-eyLLmFq7.js";import"./clsx-B-dksMZM.js";import"./index-C46OFllo.js";import"./useLocalizedStringFormatter-nMq0Hiqv.js";import"./context-Cby3fyqM.js";import"./browser-BvSJi_ez.js";import"./utils-B4V-7u16.js";import"./IconWarning-CXl4-aHF.js";import"./Text-ByRCXQub.js";import"./EmulatedBoldText-BsRwGIpf.js";import"./LoadingSpinner-CWX_u-O3.js";import"./Button-D2lj5RUi.js";import"./ProgressBar-DZD68PrE.js";import"./Hidden-7U06UOp8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BZLy2WOf.js";import"./useFocusable-DX1uCwgO.js";import"./Dialog-CVc-VcQU.js";import"./RSPContexts-uyFjXPd-.js";import"./OverlayArrow-DfX6d8e5.js";import"./useControlledState-CiQWtKCp.js";import"./Collection-DADNKWxZ.js";import"./CollectionBuilder-D91eRMtU.js";import"./SelectionIndicator-B1G8Paba.js";import"./Separator-DtbrqDaf.js";import"./getActionGroupSlot-PuK0vT60.js";import"./useStatic-DlLFMLM2.js";import"./context-MNDXyV03.js";import"./Popover-DJAMooXE.js";import"./OverlayTrigger-C9iAiDvY.js";import"./ControlledNotification-DC4lr8-K.js";import"./ClearPropsContextView-CUGxvixI.js";import"./LayoutCard-Dg7UiP0V.js";import"./Accordion-D4oNE82T.js";import"./Alert-Bz7S7j10.js";import"./AlertIcon-DQP9zo97.js";import"./AlertBadge-DaxC3GtD.js";import"./Align-P8V1Q4zm.js";import"./TableFooterRow-BlwGe7id.js";import"./SkeletonText-iLGb6R9n.js";import"./Avatar-cdLZcXRx.js";import"./AvatarStack-agTMnrWH.js";import"./Badge-DFsVvi31.js";import"./BigNumber-Bt1iSyPL.js";import"./Breadcrumb-DNlSahlR.js";import"./Link-1H4K_8fk.js";import"./Heading-C1wKNzIE.js";import"./Legend-BrAPCcNY.js";import"./FileCardList-akCe4Bod.js";import"./Image-e5dvuzse.js";import"./CodeBlock-LHUZXXkM.js";import"./CopyButton-BSJ-SJCz.js";import"./Tooltip-9G2G73RR.js";import"./react-children-utilities-ClXZ5-XR.js";import"./Color-C6rYFkNJ.js";import"./Content-CZbbtpB-.js";import"./ContextualHelpTrigger-CGIfLTfr.js";import"./CounterBadge-B9lIwBpm.js";import"./DonutChart-TvRK9guW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DprCkBro.js";import"./Header-C-LoJzH4.js";import"./Initials-BlPNjhCg.js";import"./InlineCode-DaOTSjEh.js";import"./LabeledValue-d3PVC35A.js";import"./PopoverTrigger-BTB-rtbw.js";import"./Markdown-Bsq1nR0u.js";import"./Separator-BaKMsN6v.js";import"./Message-4cz3-R_F.js";import"./MessageSeparator-CYu3gOHf.js";import"./NavigationGroup-QULUp6_3.js";import"./Notification-BJB-3CMf.js";import"./NotificationProvider-C_qrQhRR.js";import"./ProgressBar-C_pI3_3Q.js";import"./Rating-BHzGWjmK.js";import"./Skeleton-lK6gmGJo.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
