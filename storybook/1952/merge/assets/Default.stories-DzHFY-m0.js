import{j as r}from"./iframe-BuQIW6_u.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CTHW-5ya.js";import{L as m}from"./Link-nQAkOiiB.js";import{H as s}from"./HeaderNavigation-D39gSlaf.js";import{B as o}from"./Button-DlXaalMD.js";import{T as p}from"./Text-8TMWzlfF.js";import{I as C}from"./Image-BeRDOyXk.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-1e1kncve.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CKiAwo_a.js";import"./ContextMenuSection-k-oykwvR.js";import{a as D,M as E}from"./Modal-BfqDGk2n.js";import{H as G}from"./Heading-CT_713bG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./context-DHpT4jQ7.js";import"./utils-C3-2IFIX.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BKHC3-jq.js";import"./useFocus-CJRfh2Zc.js";import"./useFocusRing-DhNL4Zu8.js";import"./useFocusable-5iT1iM-_.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BBuxslej.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BKD05Onb.js";import"./ProgressBar-CnP9HTSN.js";import"./Label-Bj6uOgB2.js";import"./Hidden-kXch4Bq4.js";import"./useLabel-V7qiuXiw.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DTjbbqmr.js";import"./EmulatedBoldText-jJ_haocf.js";import"./Text-CA4hy8xs.js";import"./AlertIcon-flRsCpQE.js";import"./Action-NQcD1SkN.js";import"./context-nH1y_ndl.js";import"./useStatic-Cs9s3jvC.js";import"./getActionGroupSlot-DeOL7iYR.js";import"./Popover-DFc02vxF.js";import"./DialogTriggerView-5KTKvzk5.js";import"./Dialog-DEmHowc0.js";import"./RSPContexts-CueUa63T.js";import"./OverlayArrow-BFcQ4aC2.js";import"./useControlledState-DeMfvYEX.js";import"./Collection-BX_jXMRy.js";import"./CollectionBuilder-kPYqAuhc.js";import"./Separator-D2HmxWfn.js";import"./Group-C2-D-gHZ.js";import"./SearchField-BQcQWlfh.js";import"./FieldError-CwfU_VRl.js";import"./Form-QX_URUcu.js";import"./useTextField-ChNo9r-2.js";import"./useFormReset-Cq5VWng9.js";import"./TextField-B1BJmtCC.js";import"./useEvent-Cn4un1lG.js";import"./SelectionManager-pzK_YEl4.js";import"./useCollator-QIDMCYGr.js";import"./FocusScope-CbX1YQFz.js";import"./VisuallyHidden-Db59Lmwd.js";import"./Switch-DxZwAdcT.js";import"./Label-_oW49-Il.js";import"./useToggleState-BPUo5fOe.js";import"./Overlay-BgxZeNvz.js";import"./ButtonView-COkyfpWf.js";import"./Heading-B-jFBTau.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
