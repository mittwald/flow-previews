import{j as r}from"./iframe-CXqVlE5o.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-DQKg17Kq.js";import{L as m}from"./Link-BzSERy2Z.js";import{H as s}from"./HeaderNavigation-CvUO5TRN.js";import{B as o}from"./Button-Du00uc9D.js";import{T as p}from"./Text-CH29UKf3.js";import{I as C}from"./Image-CPE-Rj5I.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Ds2dEa3v.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CxBiJWHg.js";import"./ContextMenuSection-BMT5ukXt.js";import{a as D,M as G}from"./Modal-BUm1f-D0.js";import{H as E}from"./Heading-BkRj0gZS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NXXeTbsd.js";import"./mergeRefs-DQ42lkDZ.js";import"./index-ClGSVCJF.js";import"./useLocalizedStringFormatter-CWaF9vId.js";import"./context-b4vYPaxO.js";import"./utils-DhntlPo5.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BIfqd23k.js";import"./useFocus-GvwPC70C.js";import"./useFocusRing-B7D_5WWT.js";import"./useFocusable-Be_5Opbr.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-RoF3sq9N.js";import"./Button-DUPqVliB.js";import"./ProgressBar-vJhN7QSw.js";import"./Label-CEgZ5zSu.js";import"./Hidden-DGVcGJhp.js";import"./useLabel-BoMX0OaP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-C-6Px3BF.js";import"./EmulatedBoldText-sAcZVeZh.js";import"./Text-Bve5DhhS.js";import"./AlertIcon-CstihK0z.js";import"./Action-Fouht4PW.js";import"./context-DB5D0RgA.js";import"./useStatic-CfGR59On.js";import"./getActionGroupSlot-DtIGCXnZ.js";import"./Popover-CTOMC3qA.js";import"./DialogTriggerView-CiNaj0jt.js";import"./Dialog-B8n0JlRf.js";import"./RSPContexts-ChZvsbky.js";import"./OverlayArrow-DyP_8nEw.js";import"./useControlledState-CFQ9Vv_1.js";import"./Collection-BFmkHyuD.js";import"./CollectionBuilder-BNyKaLrq.js";import"./Separator-p7bJa_SD.js";import"./Input-Bbua86z1.js";import"./SearchField-CXyAr8lf.js";import"./FieldError-CFZuL0-a.js";import"./Form-WS4i-nO-.js";import"./Group-Q7U48ggJ.js";import"./useTextField-YoCmK9Gk.js";import"./useFormReset-BNnepUUT.js";import"./TextField-CHQyl2Bp.js";import"./SelectionManager-B3YIcTuf.js";import"./useEvent-D6qlNMlI.js";import"./useCollator-BhxnC7fV.js";import"./FocusScope-BugPP909.js";import"./VisuallyHidden-CCMgatrd.js";import"./Switch-ixTtDEpZ.js";import"./Label-CVPCngVS.js";import"./useToggleState-BZWQUo5o.js";import"./Overlay-g94Tbxh7.js";import"./Header-DKTrM-AY.js";import"./ButtonView-D5fDSWg6.js";import"./Heading-CsjHJOwP.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
