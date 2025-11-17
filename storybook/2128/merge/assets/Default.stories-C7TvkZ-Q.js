import{r as x,j as e}from"./iframe-Dxj0SZQz.js";import{K as t,s as u}from"./Modal-CL3ryr0m.js";import{S as F}from"./Section-CFUbkEZF.js";import{F as f,d as g}from"./FileCardList-B5oao-64.js";import{u as S,F as C,t as D}from"./Form-DjbKdWk-.js";import"./ResetButton-BsID6BFc.js";import{B as s}from"./Button-BkQ_NRiX.js";import{A as y}from"./ActionGroup-WjAvs-BH.js";import{_ as j,$ as O}from"./IconWarning-S0UXp0fg.js";import{H as h}from"./Heading-DOS_NISo.js";import{T as b}from"./Text-nz3YKbDr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-BgiT-tjm.js";import"./flowComponent-D6iV2DzL.js";import"./index-Bd2Xf5pv.js";import"./index-BWjFPLHz.js";import"./context-DANfXhqK.js";import"./Button-CXPXZjsM.js";import"./utils-Cfq8faXc.js";import"./ProgressBar-LRI5m-um.js";import"./Hidden-Bwn6RBKf.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C6-P6koC.js";import"./useFocusRing-DoLOI9UU.js";import"./useFocusable-DJxE8QS3.js";import"./RSPContexts-jyJS88rd.js";import"./Collection-A8jgBcw1.js";import"./CollectionBuilder-DAFFcbNw.js";import"./SelectionIndicator-DpzNLy52.js";import"./Separator-CHuWT96t.js";import"./browser-KBC6jiXy.js";import"./useLocalizedStringFormatter-eZsG_k2F.js";import"./useStatic-CdzpEGHk.js";import"./LoadingSpinner-D4zskspE.js";import"./LayoutCard-DAKag2G9.js";import"./Accordion-B1R47Hbp.js";import"./Alert-CfoEhuU6.js";import"./AlertIcon-EqhFZIQA.js";import"./AlertBadge-kPhBxQgx.js";import"./Align-hyosXLBb.js";import"./Avatar-B1NU17Uz.js";import"./AvatarStack-DUps09Fx.js";import"./BigNumber-BGAos7Ap.js";import"./Breadcrumb-Bzo_Amw-.js";import"./Link-CcIfSoxL.js";import"./Legend-BNkBSiUS.js";import"./Color-BdzDTaI9.js";import"./TableFooterRow-BLcT84fb.js";import"./SkeletonText-Co3L-D1u.js";import"./Content-BKdb7Kra.js";import"./Label-r7-X59g3.js";import"./CounterBadge-D-Xb7Rtk.js";import"./DonutChart-DY9mPS7U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bf_xICCO.js";import"./Header-C6iAqINA.js";import"./Image-B3ODdtrF.js";import"./Initials-DyQkgoJm.js";import"./InlineCode-FKDFRHZK.js";import"./Separator-Du6kbLAk.js";import"./MessageSeparator-BKDDL8-8.js";import"./NavigationGroup-D_-Rv13i.js";import"./Notification-Chd6t4iX.js";import"./NotificationProvider-BaN4hfIP.js";import"./ControlledNotification-BWZxS6H1.js";import"./ProgressBar-CD9e9P4f.js";import"./Rating-CmxrZzsX.js";import"./Skeleton-CcbZpjVZ.js";import"./getActionGroupSlot-Di5FkjTO.js";import"./EmulatedBoldText-CgLGHcPw.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ne={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(h,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Pe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Pe as __namedExportsOrder,Ne as default};
