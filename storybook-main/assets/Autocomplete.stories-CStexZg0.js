import{j as r,r as g}from"./iframe-DKDdzEg2.js";import{u as c,F as d,t as b,c as h}from"./Form-Chvorj6p.js";import{R as F,S as x}from"./ResetButton-CxyjnaZ7.js";import{B as f}from"./Button-IIDunxYf.js";import{S as E}from"./Section-BlYXDkFo.js";import{A as T}from"./ActionGroup-DccX8bro.js";import{s as u}from"./Action-Bo6ZQC_V.js";import{A as i,T as p,F as B,O as A}from"./Modal-CwliNNiJ.js";import{L as l}from"./Label-RGDjpvHy.js";import"./index-nuYtCEEu.js";import"./dynamic-Bw-gnOjZ.js";import"./flowComponent-DT3kn2rn.js";import"./index-6duIgbo8.js";import"./clsx-B-dksMZM.js";import"./index-BpsioLCE.js";import"./useLocalizedStringFormatter-DYvohNzk.js";import"./context-BHOWQ-F6.js";import"./browser-CFpNIPwD.js";import"./utils-glgR2nbC.js";import"./IconWarning-CYZefWcZ.js";import"./Text-CjflxeLx.js";import"./EmulatedBoldText-CD_LMSIk.js";import"./LoadingSpinner-Dty_8Gzu.js";import"./Button-CPtKzFV4.js";import"./ProgressBar-Wlqbg7O4.js";import"./Hidden-C3L5W06o.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-C2RFcQ8k.js";import"./useFocusable-DFxE2EDX.js";import"./Dialog-B3clCL3D.js";import"./RSPContexts-CyAJ8woy.js";import"./OverlayArrow-Dk7sPebR.js";import"./useControlledState-Fctu_HD9.js";import"./Collection-B8A5mjCR.js";import"./CollectionBuilder-DqTPNBbL.js";import"./SelectionIndicator-Ba__-_kO.js";import"./Separator-C02nZRTr.js";import"./getActionGroupSlot-CxXJdk8g.js";import"./useStatic-D7KAuRzE.js";import"./context-CDCUS0mP.js";import"./Popover-FiU_odVZ.js";import"./OverlayTrigger-BFzT5tm9.js";import"./ControlledNotification-A-nlkOWl.js";import"./ClearPropsContextView-jEZ-jszv.js";import"./LayoutCard-BiMl8twz.js";import"./Accordion-B6qbIRBj.js";import"./Alert-BKcRTWJ1.js";import"./AlertIcon-DTKwqTaw.js";import"./AlertBadge-qExA_A1s.js";import"./Align-YF_VCib_.js";import"./TableFooterRow-B5kek3pc.js";import"./SkeletonText-BFsiKAVX.js";import"./Avatar-HfBKa7-S.js";import"./AvatarStack-BAqbTSUA.js";import"./Badge-l5GKE6_A.js";import"./BigNumber-59jK5BSe.js";import"./Breadcrumb-81fsSz21.js";import"./Link-D6MGqqc4.js";import"./Heading-Dg8JptjO.js";import"./Legend-w3fonmao.js";import"./FileCardList-B9Uf0zuc.js";import"./Image-BWRlhe9x.js";import"./CodeBlock-BFll9a2A.js";import"./CopyButton-CpBG4-QY.js";import"./Tooltip-DjRJxdw8.js";import"./react-children-utilities-5wsaFL6D.js";import"./Color-BNN9qFvq.js";import"./Content-C0vcMxy5.js";import"./ContextualHelpTrigger-CVj6wYkq.js";import"./CounterBadge-5IM3_DLn.js";import"./DonutChart-DfsKudDh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cq7vsP2F.js";import"./Header-CycXZnr3.js";import"./Initials-D_TulZuS.js";import"./InlineCode-DJEF18pw.js";import"./LabeledValue-BwyMvv4-.js";import"./PopoverTrigger-C0NOt86m.js";import"./Markdown-DvRsFFz3.js";import"./Separator-DtSoVEwv.js";import"./Message-Dbcl2XRw.js";import"./MessageSeparator-CSbQdfrJ.js";import"./NavigationGroup-CHqgAgY6.js";import"./Notification-BDRnPedH.js";import"./NotificationProvider-CzLfo5F4.js";import"./ProgressBar-k15nJaNS.js";import"./Rating-CaF2rOcE.js";import"./Skeleton-DHQXuh7L.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const lt=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,s as WithFocus,lt as __namedExportsOrder,pt as default};
