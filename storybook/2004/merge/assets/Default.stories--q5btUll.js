import{j as r}from"./iframe-Cb4Rgx0e.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-BnvsEgCq.js";import{L as m}from"./Link-raLhHApU.js";import{H as s}from"./HeaderNavigation-EU0GCvYs.js";import{B as o}from"./Button-H4sh-QDS.js";import{T as p}from"./Text-B7bLqwrq.js";import{I as C}from"./Image-Cxf9edU3.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C0HtPUJ8.js";import{b as y,C as A,M as c}from"./ContextMenuSection-DhKc6P03.js";import{a as D,M as E}from"./Modal-Cv5ELzj2.js";import{H as G}from"./Heading-DkmYDwus.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./context-CW2oe5vS.js";import"./utils-ClJ9kHS9.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Q8MCvqvF.js";import"./useFocus-DShqRyJ9.js";import"./useFocusRing-BzqCweW_.js";import"./useFocusable-Dx7vOlYc.js";import"./dynamic-PM36Lxvz.js";import"./LoadingSpinner-CjRzs_7S.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CEnLKZ0o.js";import"./ProgressBar-DhcjamRH.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./useLabel-YUMynDBh.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-GZXaf9ZM.js";import"./EmulatedBoldText-BOxB1C6V.js";import"./Text-U_OSpJmR.js";import"./AlertIcon-DjdoE8gJ.js";import"./Action-DcFJ4Fb5.js";import"./context-DxjXV7eH.js";import"./useStatic-CfZfNe1T.js";import"./getActionGroupSlot-CMriNb6k.js";import"./Popover-CIu4Zu5_.js";import"./DialogTriggerView-BiIifotB.js";import"./RSPContexts-WcRCGlYY.js";import"./ClearPropsContextView-CBJyDj7P.js";import"./useControlledState-CQK5P4gM.js";import"./FocusScope-soGnmPtw.js";import"./useCollator-BXysv4D3.js";import"./VisuallyHidden-CjQvb6dT.js";import"./Collection-CuwOpF0o.js";import"./CollectionBuilder-BboySDMU.js";import"./context-DsHIbBn4.js";import"./Separator-BKeFtAeg.js";import"./SelectionManager-CDVGcynV.js";import"./useEvent-DD3xMrdQ.js";import"./Switch-CGy0me7G.js";import"./Label-BaR_Jp0n.js";import"./useToggleState-BNOciw4N.js";import"./useFormReset-XDrOOyWm.js";import"./Overlay-CfZPEVlU.js";import"./ButtonView-4sMclYav.js";import"./Heading-Bdg4szuX.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
