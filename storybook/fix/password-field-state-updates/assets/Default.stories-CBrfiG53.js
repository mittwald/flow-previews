import{j as r}from"./iframe-CIziUxb4.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-Bo3R4dY7.js";import{L as m}from"./Link-CpfQTYWY.js";import{H as s}from"./HeaderNavigation-Ewii24Jp.js";import{B as o}from"./Button-Bo5QyJiI.js";import{T as p}from"./Text-BbvPR7fy.js";import{I as C}from"./Image-BHZx5vm0.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-NOwhkioL.js";import{a as D,C as y,M as c}from"./ContextMenuContent-CGGw8nyN.js";import"./ContextMenuSection-YXAca86g.js";import{a as A,M as G}from"./Modal-CBAhnY98.js";import{H as E}from"./Heading-DwiitY1h.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTHa5A9a.js";import"./mergeRefs-BWd0MHpr.js";import"./index-BCb4M8Mf.js";import"./useLocalizedStringFormatter-CeVTCw4Y.js";import"./context-COqsJpPE.js";import"./utils-CDtaCsrA.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DBbw6zuw.js";import"./useFocus-C2EjpkOi.js";import"./useFocusRing-GixRvSCg.js";import"./useFocusable-CTkb3k3n.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CF4f6GZw.js";import"./Button-Cv6Z8Boo.js";import"./ProgressBar-Cyf_qqmn.js";import"./Label-CjcM3hPV.js";import"./Hidden-FsuglVKe.js";import"./useLabel-xKHqVDKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Do2MbvKV.js";import"./EmulatedBoldText-DYFJL8XT.js";import"./Text-CgaJS0Gc.js";import"./AlertIcon-CpWB7zhi.js";import"./Action-D9fRtCz0.js";import"./context-DRI9dj_K.js";import"./useStatic-jzgjWO-I.js";import"./getActionGroupSlot-Bm-tl-k-.js";import"./Popover-BEiJ1yaF.js";import"./DialogTriggerView-BBwhD0Uy.js";import"./Dialog-DrnAiCXy.js";import"./RSPContexts-C-PXoOC4.js";import"./OverlayArrow-Crxssx6c.js";import"./useControlledState-DVvxwSwc.js";import"./Collection-DWx577Su.js";import"./CollectionBuilder-juJreXU3.js";import"./Separator-DwuryqiD.js";import"./Input-BwarHJUi.js";import"./SearchField-B6_Arn2l.js";import"./FieldError-D98nnMcy.js";import"./Form-B_FAPEGw.js";import"./Group-OTUHyQEq.js";import"./useTextField-a1-urwSv.js";import"./useFormReset-TpB1RScY.js";import"./TextField-BmMhD-pd.js";import"./SelectionManager-DkqMHGWK.js";import"./useEvent-CS1uc1JE.js";import"./useCollator-Bw9Jdjt0.js";import"./FocusScope-BxmYTtWO.js";import"./VisuallyHidden-D_XOb9iP.js";import"./Switch-BB6Qmcpt.js";import"./Label-CDKeaBWT.js";import"./useToggleState-DGtSGzsH.js";import"./Overlay-Cfp0csIz.js";import"./Header-Dy8P3Il_.js";import"./ButtonView-DiJ0o7jC.js";import"./Heading-r07djNMc.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
